import colorString from "color-string";
import { ImageOptions, ImageType } from "./typing/types";

export function getOptions(inOptions: ImageOptions) {
    const type: ImageType = inOptions?.type ?? "png";
    const defaults = type === "png" ? BITMAP_OPTIONS : VECTOR_OPTIONS;
    return { ...defaults, ...inOptions };
}

export function colorToHex(color: number | string): string {
    if (typeof color === "string") {
        return colorString.to.hex(colorString.get.rgb(color));
    }
    return `#${(color >>> 8).toString(16).padStart(6, "0")}`;
}

const commonOptions: Pick<
    ImageOptions,
    | "type"
    | "parse_url"
    | "ec_level"
    | "logo"
    | "logoWidth"
    | "logoHeight"
    | "bgColor"
    | "color"
> = {
    type: "png",
    parse_url: false,
    ec_level: "M",
    logo: undefined,
    logoWidth: 20,
    logoHeight: 20,
    bgColor: 0xffffffff,
    color: 0x000000ff,
};

const BITMAP_OPTIONS: ImageOptions = {
    ...commonOptions,
    margin: 1,
    size: 5,
};

const VECTOR_OPTIONS: ImageOptions = {
    ...commonOptions,
    margin: 1,
    size: 0,
};
