import { isNullOrUndefined } from "util";

export class GifClass {
    id:     string;
    title:  string;
    author: string;
    src:    string;
    height: number;
    width: number;

    static deserialize(input: Object): GifClass {
        const gif = new GifClass();
        
        gif.id = input['data'].id;
        gif.title = input['data'].title;
        gif.height = input['data'].preview.images[0].source.height * 0.3;
        gif.width = input['data'].preview.images[0].source.width * 0.3;
        gif.src = input['data'].url;

        return gif;
    }
  }
