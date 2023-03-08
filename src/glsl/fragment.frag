precision highp float;

varying vec2 vUv;

uniform float time;
uniform float size;
uniform float range;
uniform float speed;
uniform float leap;
uniform float leapSpan;
uniform float gray;
uniform float noiseStrength;
uniform float edgeNoiseStrength;
uniform float inversion;
uniform vec2 resolution;
uniform float positionX;
uniform float positionY;

float circle(in vec2 pos, in vec2 center, in float radius) {
  float d = distance(pos, center) + 0.001;
  return radius / d;
}

float random(float v) {
  return fract(sin(v) * 64453.2412);
}

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}


void main(void) {
  float t = time * 1.0 * (speed * 12.0);
  float v = 0.0;
  for (int i = 0; i < 5; i++) {
    vec2 center = vec2(resolution.x * 0.5, resolution.y * 0.5);
    vec2 move = min(resolution.x, resolution.y) * vec2(sin(t * random(float(i + 1)) * 0.001) * (range * 0.01), sin(t * random(float(i * 2 + 1)) * 0.001) * (range * 0.01));
    center.x += move.x;
    center.y += move.y;
    center.x += positionX * 0.01 * resolution.x;
    center.y += positionY * 0.01 * resolution.y;
    v += circle(gl_FragCoord.xy, center, min(resolution.x, resolution.y) * 0.001 * size);
  }
  float c = smoothstep(leap, (leap + leapSpan * 0.01), v);
  c = 1.0 - c;
  float n = noise(gl_FragCoord.xy / resolution.xy);

  //edge
  c += n * c * edgeNoiseStrength * 0.01;
  // noise
  c += n * noiseStrength * 0.01;
  
  c = c - (2.0 * c) * inversion;

  c = mix(0.0, 1.0, c + 0.5 + inversion);

  float r = map(c, 0.0, 1.0, gray * 0.01, 1.0);
  float g = map(c, 0.0, 1.0, gray * 0.01, 1.0);
  float b = map(c, 0.0, 1.0, gray * 0.01, 1.0);

  // gl_FragColor = vec4(r, g, b, 1.0);
  gl_FragColor = vec4(r, g, b, 1.0);
  //gl_FragColor = vec4((gl_FragCoord.x / resolution.x),(gl_FragCoord.y / resolution.y), 1.0, 1.0);
}