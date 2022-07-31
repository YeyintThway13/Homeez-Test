import React, { useState } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";

const Furniture = ({ isTransform, imageURL }) => {
  const [hee] = useImage(imageURL);
  const [shape, setShape] = useState({ width: 100, height: 100 });
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);

  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    // we need to attach transformer manually
    trRef?.current?.nodes([shapeRef.current]);
    trRef?.current?.getLayer().batchDraw();
  }, []);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      style={{ position: "absolute" }}
    >
      <Layer>
        <Image
          width="40px"
          image={hee}
          x={x}
          y={y}
          ref={shapeRef}
          {...shape}
          draggable
          onDragEnd={(e) => {
            setX(e.target.x());
            setY(e.target.y());
          }}
          onTransformEnd={() => {
            // transformer is changing scale of the node
            // and NOT its width or height
            // but in the store we have only width and height
            // to match the data better we will reset scale on transform end
            const node = shapeRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();

            // we will reset it back
            node.scaleX(1);
            node.scaleY(1);
            setShape({
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
            });
          }}
        />
        {isTransform && (
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
        )}
      </Layer>
    </Stage>
  );
};

export default Furniture;
