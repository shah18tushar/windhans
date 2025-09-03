import {
  useRef,
  useEffect,
  useState,
  useMemo,
  useId,
  FC,
  PointerEvent,
} from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

const CurvedLoop: FC<CurvedLoopProps> = ({
  marqueeText = "",
  speed = 2,
  className,
  curveAmount = 400,
  direction = "left",
  interactive = true,
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (
      (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
    );
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const [spacing, setSpacing] = useState(0);
  const [offset, setOffset] = useState(0);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velRef = useRef(0);

  const textLength = spacing;
  const totalText = textLength
    ? Array(Math.ceil(1800 / textLength) + 2)
        .fill(text)
        .join("")
    : text;
  const ready = spacing > 0;

  useEffect(() => {
    if (measureRef.current)
      setSpacing(measureRef.current.getComputedTextLength());
  }, [text, className]);

  useEffect(() => {
    if (!spacing) return;
    if (textPathRef.current) {
      const initial = -spacing;
      textPathRef.current.setAttribute("startOffset", initial + "px");
      setOffset(initial);
    }
  }, [spacing]);

  useEffect(() => {
    if (!spacing || !ready) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === "right" ? speed : -speed;
        const currentOffset = parseFloat(
          textPathRef.current.getAttribute("startOffset") || "0"
        );
        let newOffset = currentOffset + delta;
        const wrapPoint = spacing;
        if (newOffset <= -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;
        textPathRef.current.setAttribute("startOffset", newOffset + "px");
        setOffset(newOffset);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, ready]);

  const onPointerDown = (e: PointerEvent) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;
    const currentOffset = parseFloat(
      textPathRef.current.getAttribute("startOffset") || "0"
    );
    let newOffset = currentOffset + dx;
    const wrapPoint = spacing;
    if (newOffset <= -wrapPoint) newOffset += wrapPoint;
    if (newOffset > 0) newOffset -= wrapPoint;
    textPathRef.current.setAttribute("startOffset", newOffset + "px");
    setOffset(newOffset);
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? "right" : "left";
  };

  const cursorStyle = interactive
    ? dragRef.current
      ? "grabbing"
      : "grab"
    : "auto";

  return (
    <div
      className="-mt-72 min-h-screen -mb-40 flex items-center justify-center w-full "
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="select-none w-full overflow-visible block aspect-[100/12] text-[3.5rem] font-semibold uppercase leading-none"
        viewBox="0 0 1440 120"
      >
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {text}
        </text>
        <defs>
          <path
            ref={pathRef}
            id={pathId}
            d={pathD}
            fill="none"
            stroke="transparent"
          />
        </defs>
        {ready && (
          <text xmlSpace="preserve" className={`fill-cyan-600 ${className ?? ""}`}>
            <textPath
              ref={textPathRef}
              href={`#${pathId}`}
              startOffset={offset + "px"}
              xmlSpace="preserve"
            >
              {totalText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default CurvedLoop;










// "use client";

// import {
//   useRef,
//   useEffect,
//   useState,
//   useMemo,
//   useId,
//   FC,
//   PointerEvent,
// } from "react";

// interface CurvedLoopProps {
//   marqueeText?: string;
//   speed?: number;
//   className?: string;
//   curveAmount?: number;
//   direction?: "left" | "right";
//   interactive?: boolean;
// }

// const CurvedLoop: FC<CurvedLoopProps> = ({
//   marqueeText = "",
//   speed = 2,
//   className,
//   curveAmount = 400,
//   direction = "left",
//   interactive = true,
// }) => {
//   const text = useMemo(() => {
//     const hasTrailing = /\s|\u00A0$/.test(marqueeText);
//     return (
//       (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
//     );
//   }, [marqueeText]);

//   const measureRef = useRef<SVGTextElement | null>(null);
//   const textPathRef = useRef<SVGTextPathElement | null>(null);
//   const pathRef = useRef<SVGPathElement | null>(null);
//   const [spacing, setSpacing] = useState(0);
//   const [offset, setOffset] = useState(0);
//   const uid = useId();
//   const pathId = `curve-${uid}`;
//   const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

//   const dragRef = useRef(false);
//   const lastXRef = useRef(0);
//   const dirRef = useRef<"left" | "right">(direction);
//   const velRef = useRef(0);

//   const textLength = spacing;
//   const totalText = textLength
//     ? Array(Math.ceil(1800 / textLength) + 2)
//         .fill(text)
//         .join("")
//     : text;
//   const ready = spacing > 0;

//   useEffect(() => {
//     if (measureRef.current)
//       setSpacing(measureRef.current.getComputedTextLength());
//   }, [text, className]);

//   useEffect(() => {
//     if (!spacing) return;
//     if (textPathRef.current) {
//       const initial = -spacing;
//       textPathRef.current.setAttribute("startOffset", initial + "px");
//       setOffset(initial);
//     }
//   }, [spacing]);

//   useEffect(() => {
//     if (!spacing || !ready) return;
//     let frame = 0;
//     const step = () => {
//       if (!dragRef.current && textPathRef.current) {
//         const delta = dirRef.current === "right" ? speed : -speed;
//         const currentOffset = parseFloat(
//           textPathRef.current.getAttribute("startOffset") || "0"
//         );
//         let newOffset = currentOffset + delta;
//         const wrapPoint = spacing;
//         if (newOffset <= -wrapPoint) newOffset += wrapPoint;
//         if (newOffset > 0) newOffset -= wrapPoint;
//         textPathRef.current.setAttribute("startOffset", newOffset + "px");
//         setOffset(newOffset);
//       }
//       frame = requestAnimationFrame(step);
//     };
//     frame = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(frame);
//   }, [spacing, speed, ready]);

//   const onPointerDown = (e: PointerEvent) => {
//     if (!interactive) return;
//     dragRef.current = true;
//     lastXRef.current = e.clientX;
//     velRef.current = 0;
//     (e.target as HTMLElement).setPointerCapture(e.pointerId);
//   };

//   const onPointerMove = (e: PointerEvent) => {
//     if (!interactive || !dragRef.current || !textPathRef.current) return;
//     const dx = e.clientX - lastXRef.current;
//     lastXRef.current = e.clientX;
//     velRef.current = dx;
//     const currentOffset = parseFloat(
//       textPathRef.current.getAttribute("startOffset") || "0"
//     );
//     let newOffset = currentOffset + dx;
//     const wrapPoint = spacing;
//     if (newOffset <= -wrapPoint) newOffset += wrapPoint;
//     if (newOffset > 0) newOffset -= wrapPoint;
//     textPathRef.current.setAttribute("startOffset", newOffset + "px");
//     setOffset(newOffset);
//   };

//   const endDrag = () => {
//     if (!interactive) return;
//     dragRef.current = false;
//     dirRef.current = velRef.current > 0 ? "right" : "left";
//   };

//   const cursorStyle = interactive
//     ? dragRef.current
//       ? "grabbing"
//       : "grab"
//     : "auto";

//   return (
//     <div className="relative w-full overflow-hidden pb-20">
//       {/* Luxury background elements matching CaseStudy */}
//       {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,77,157,0.1),transparent_70%)]"></div> */}

//       {/* Animated particles matching CaseStudy */}
//       {/* <div className="absolute inset-0">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-[#034D9D] rounded-full opacity-20 animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 2}s`,
//             }}
//           ></div>
//         ))}
//       </div> */}

//       {/* Gradient borders */}
//       {/* <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#034D9D] to-transparent opacity-50"></div>
//       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#034D9D] to-transparent opacity-50"></div> */}

//       <div
//         className="relative flex items-center justify-center w-full -mt-20"
//         style={{
//           visibility: ready ? "visible" : "hidden",
//           cursor: cursorStyle,
//         }}
//         onPointerDown={onPointerDown}
//         onPointerMove={onPointerMove}
//         onPointerUp={endDrag}
//         onPointerLeave={endDrag}
//       >
//         <svg
//           className="select-none w-full overflow-visible block aspect-[100/12] text-[5rem] font-semibold uppercase leading-none"
//           viewBox="0 0 1440 120"
//         >
//           <text
//             ref={measureRef}
//             xmlSpace="preserve"
//             style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
//           >
//             {text}
//           </text>
//           <defs>
//             {/* Gradient definition matching CaseStudy */}
//             <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#22d3ee" />
//               <stop offset="50%" stopColor="#0ea5e9" />
//               <stop offset="100%" stopColor="#034D9D" />
//             </linearGradient>

//             <path
//               ref={pathRef}
//               id={pathId}
//               d={pathD}
//               fill="none"
//               stroke="transparent"
//             />

//             {/* Glow filter for premium text effect */}
//             <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
//               <feGaussianBlur stdDeviation="4" result="blur" />
//               <feComposite in="SourceGraphic" in2="blur" operator="over" />
//             </filter>
//           </defs>
//           {ready && (
//             <text
//               xmlSpace="preserve"
//               className={`${className ?? ""}`}
//               fill="url(#textGradient)"
//               filter="url(#glow)"
//               style={{
//                 fontFamily: "'Inter', sans-serif",
//                 fontWeight: 600,
//                 letterSpacing: "1px",
//               }}
//             >
//               <textPath
//                 ref={textPathRef}
//                 href={`#${pathId}`}
//                 startOffset={offset + "px"}
//                 xmlSpace="preserve"
//                 className="opacity-90 hover:opacity-100 transition-opacity duration-300"
//               >
//                 {totalText}
//               </textPath>
//             </text>
//           )}
//         </svg>
//       </div>

//       {/* Decorative elements at ends of curve */}
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-[#034D9D] rounded-full opacity-80"></div>
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-4 h-4 bg-gradient-to-br from-[#034D9D] to-cyan-400 rounded-full opacity-80"></div>
//     </div>
//   );
// };

// export default CurvedLoop;