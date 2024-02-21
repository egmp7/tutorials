Shader "Unlit/shader1"
{
    Properties
    {
        _Value("Value", Float) = 1.0
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

            float _Value;

            struct MeshData // per vertex mesh data
            {
                float4 vertex : POSITION;
                //float2 uv : TEXCOORD0;
            };

            struct Interpolator
            {
                float4 vertex : SV_POSITION;  // clip space position
            };

            Interpolator vert (MeshData v)
            {
                Interpolator o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                return o;
            }

            float4 frag (Interpolator i) : SV_Target
            {
                return float4( 1, 0, 0, 1 ) ;
            }
            ENDCG
        }
    }
}
