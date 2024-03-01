Shader "Unlit/peer2"
{
    Properties
    {
        _Color ("Color",Color) = (1,0,0,1)
        _Ambient ("Ambient light color", Color) = (1,1,1,1)
        _Smoothness("Smoothness", Range(0.1,30)) = 1
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }

        Pass
        {
            HLSLPROGRAM
            #pragma vertex vert
            #pragma fragment frag

            #include "UnityCG.cginc"
            #include "Lighting.cginc"
            #include "AutoLight.cginc"

            float4 _Color;
            float4 _Ambient;
            float _Smoothness;

            struct Attributes
            {
                float4 vertex : POSITION;
                float4 normal : NORMAL; 
                float2 uv : TEXCOORD0;
            };

            struct Varyings
            {
                float2 uv : TEXCOORD0;
                float4 normal : NORMAL;
                float4 vertex : SV_POSITION;
                float4 worldPos: TEXCOORD1;
            };


            Varyings vert (Attributes v)
            {
                
                Varyings o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.normal = mul(UNITY_MATRIX_M,float4 (v.normal.xyz,0));
                o.worldPos = mul(UNITY_MATRIX_M,v.vertex);
                return o;
            }

            fixed4 frag (Varyings i) : SV_Target
            {

                // ambient
                float4 ambient = _Ambient;
                
                // diffuse
                float3 L = normalize(_WorldSpaceLightPos0.xyz);
                float3 N = normalize(i.normal.xyz);
                float nl = max(0,dot(N,L));
                float4 diffuse = nl * _LightColor0;

                // specular
                float3 E = normalize( _WorldSpaceCameraPos.xyz - i.worldPos.xyz);
                float3 H = reflect( -L, N );
                //float3 H = (E + L) / length(E+L);
                float sl = pow(max(0,dot(H,E)),_Smoothness);
                float4 specular = sl * _LightColor0;
                //return float4 (H,1);

                return  _Color * (diffuse + ambient + specular );
            }
            ENDHLSL
        }
    }
}
