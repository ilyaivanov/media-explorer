import { initialState } from "./state/initialState";
import { getPlaylistPreviewImages } from "./state/selectors";

export const a = 1;

describe("having a default state (please check state/initialState.ts for details)", function () {
  it("playlist with one item should have only one image as cover ", function () {
    expect(
      getPlaylistPreviewImages(initialState, "0.6104704294359848")
    ).toEqual(["https://i.ytimg.com/vi/SVJ1IxMkkcA/mqdefault.jpg"]);
  });

  it("playlist with only one child playlist should return that playlist items", function () {
    expect(
      getPlaylistPreviewImages(initialState, "DT9nA3Q0mOnVnBf32TG4")
    ).toEqual([
      "https://i.ytimg.com/vi/Sdu_1_A0dcM/mqdefault.jpg",
      "https://i.ytimg.com/vi/P9yQnwpVcsQ/mqdefault.jpg",
      "https://i.ytimg.com/vi/ysTGb27yCcc/mqdefault.jpg",
    ]);
  });
});
