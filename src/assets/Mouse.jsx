import AnimatedCursor from "react-animated-cursor";

function Mouse() {
  return (
    <>
      <AnimatedCursor
        id="mouse"
        innerSize={0}
        outerSize={50}
        color="0, 0, 0"
        outerAlpha={0.5}
        innerScale={0}
        outerScale={0.05}
        trailingSpeed={4}
        filter={true}
        mixBlendMode={true}
        outerStyle={{
          border: "2px solid #fff",
          mixBlendMode: "difference",
        }}
        innerStyle={{
            border: "4px solid #fff",
            mixBlendMode: "difference",
        }}
      />
    </>
  );
}

export default Mouse;
