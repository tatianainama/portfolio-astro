export namespace Color {
  type Hue = number;
  type Saturation = number;
  type Lightness = number;
  type Alpha = number;
  type HSL = [Hue, Saturation, Lightness];

  interface HSLBuilder {
    h: (h: Hue) => HSLBuilder;
    s: (s: Saturation) => HSLBuilder;
    l: (l: Lightness) => HSLBuilder;
    a: (a: Alpha) => HSLBuilder;
    mk: () => string;
  }

  export const hsl = ([h = 0, s = 0, l = 0]: HSL) => {
    const color = {
      h: h,
      s: s,
      l: l,
      a: 1,
    };

    const $: HSLBuilder = {
      h: (h) => {
        color.h = h;
        return $;
      },
      s: (s) => {
        color.s = s;
        return $;
      },
      l: (l) => {
        color.l = l;
        return $;
      },
      a: (a) => {
        color.a = a;
        return $;
      },
      mk: () => `hsl(${color.h}deg ${color.s}% ${color.l}% / ${color.a})`,
    };

    return $;
  };
}
