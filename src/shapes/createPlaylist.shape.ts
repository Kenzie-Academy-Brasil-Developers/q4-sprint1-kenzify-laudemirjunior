import * as yup from "yup";
import mapValues from "lodash.mapvalues";

export const createPlaylistShape = yup.lazy((artist) =>
  yup.object(
    mapValues(artist, () =>
      yup.array(
        yup.object({
          title: yup.string().required(),
          duration: yup.string().required(),
          releasedDate: yup.date().required(),
          listenedByMe: yup.number().default(0),
          genres: yup.array().strict().of(yup.string()).required(),
        })
      )
    )
  )
);
