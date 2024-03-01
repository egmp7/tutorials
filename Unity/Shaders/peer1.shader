Shader "Unlit/peer1"
{
    Properties
    {
        _Color1 ("Color 1",Color) = (1,0,0,1)
        _Color2 ("Color 2",Color) = (0,1,0,1)
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

            float4 _Color1;
            float4 _Color2;

            struct Attributes
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct Varyings
            {
                float4 vertex : SV_POSITION;
                float2 uv : TEXCOORD0;
            };


            Varyings vert (Attributes v)
            {
                Varyings o;

                // deform y axis
                v.vertex.y *= (cos(_Time.y)+1)/2;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                return o;
            }

            float4 frag (Varyings i) : SV_Target
            {
                if (fmod(floor(i.uv.x*10),2) == 0 ) return _Color1;
                else return _Color2;
            }
            ENDCG
        }
    }
}
