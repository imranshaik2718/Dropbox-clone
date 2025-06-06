import { RawImageryWrapper } from "./ImageryWrapper";
import { BottomTile } from "../tile/Bottom";
import { LeftTile } from "../tile/Left";
import { RightTile } from "../tile/Right";
import { TopTile } from "../tile/Top";

export function ImageryGrid({ index }: { index: number }) {

  return (
    <RawImageryWrapper index={index}>
      <div className="relative w-full h-full" >
        <LeftTile />
        <RightTile />
        <TopTile />
        <BottomTile />
      </div>
    </RawImageryWrapper>
  )
}
