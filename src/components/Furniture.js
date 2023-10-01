import React, { useState } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import useImage from "use-image";

const Furniture = ({ isTransform, imageURL }) => {
  const [image] = useImage(imageURL);
  const [shape, setShape] = useState({ width: 100, height: 100 });
  const [x, setX] = useState(800);
  const [y, setY] = useState(100);

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
          image={image}
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
