Shader "Custom/shader"
{
    // The _BaseColor variable is visible in the Material's Inspector, as a field 
    // called Base Color. You can use it to select a custom color. This variable
    // has the default value (1, 1, 1, 1) - white
    Properties
    {
        _BaseColor("Base Color", Color) = (1, 1, 1, 1)
    }

    SubShader
    {
        Tags { "RenderType" = "Opaque" "RenderPipeline" = "UniversalRenderPipeline" }

        Pass
        {
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Core.hlsl"  
            #include "Packages/com.unity.render-pipelines.universal/ShaderLibrary/Lighting.hlsl"          

            struct Attributes
            {
                // the position of the vertex in object space
                float4 positionOS   : POSITION;
            };

            struct Varyings
            {
                // the colour of the vertex in clip space
                float4 positionHCS  : SV_POSITION;
                // the object space position of the vertex
                // used for drawing stripes
                float4 positionOS : POSITION1;
            };

            // To make the Unity shader SRP Batcher compatible, declare all
            // properties related to a Material in a a single CBUFFER block with 
            // the name UnityPerMaterial.
            CBUFFER_START(UnityPerMaterial)
                // The following line declares the _BaseColor variable, so that you
                // can use it in the fragment shader.
                half4 _BaseColor;
            CBUFFER_END

            Varyings vert(Attributes IN)
            {
                Varyings OUT;
                // these lines manualluy do the multiplication
                //OUT.positionHCS = mul(UNITY_MATRIX_M, IN.positionOS);
                //OUT.positionHCS = mul(UNITY_MATRIX_V, OUT.positionHCS);
                //OUT.positionHCS = mul(UNITY_MATRIX_P, OUT.positionHCS);

                //This line uses the built in function to do the same thing
                OUT.positionHCS = TransformObjectToHClip(IN.positionOS.xyz);


                // copy the object space position from attributes to varyings
                OUT.positionOS = IN.positionOS;

                // this line is breakes the code
                //OUT.normalWS = mul(UNITY_MATRIX_M, float4(IN.normalOS.xyz,0));

                return OUT;
            }
            
            half4 frag(Varyings IN) : SV_Target
            {
                //change the colour based on the object space position
                // to get the stripe effect
                half4 col = _BaseColor;
                if(abs(fmod(IN.positionOS.y*20,2))>1.0)
                {
                    col.xyz *= 0;
                }
                //col.xyz *= abs(fmod(IN.positionOS.y*20,2));

                return col;

                // alternatively just return the base colour
                //return _BaseColor*intensity;
            }
           
            ENDHLSL
        }
    }
}