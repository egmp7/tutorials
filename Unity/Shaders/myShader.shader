Shader "Unlit/myShader"
{
    Properties
    {

    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "UnityCG.cginc"

            struct Attributes
            {
                float4 vertex : POSITION;
            };

            struct Varyings
            {
                float4 vertex : SV_POSITION;
            };

            Varyings vert (Attributes v)
            {
                Varyings o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                if(abs(fmod(v.vertex.y*20,2))>1.0)
                {
                    o.vertex += 0.5;
                }
                return o;
            }

            fixed4 frag (Varyings i) : SV_Target
            {
                return float4( 1, 0, 0, 1 ) ;
            }
            ENDCG
        }
    }
}
