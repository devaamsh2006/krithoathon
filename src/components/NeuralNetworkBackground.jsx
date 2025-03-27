import React, { useRef, useState, useEffect } from "react";

const NeuralNetworkBackground = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth: width, offsetHeight: height } = containerRef.current;
        generateNetwork(width, height);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const generateNetwork = (width, height) => {
    const isMobile = width < 768;
    const nodeCount = Math.floor((width * height) / (isMobile ? 12000 : 8000));

    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * (isMobile ? 2 : 3) + 1.5,
      vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.4),
      vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.4),
      pulse: Math.random() * 2 * Math.PI,
    }));

    const maxDistance = isMobile ? Math.min(width, height) * 0.08 : Math.min(width, height) * 0.12;
    const newConnections = [];

    for (let i = 0; i < newNodes.length; i++) {
      for (let j = i + 1; j < newNodes.length; j++) {
        const dx = newNodes[i].x - newNodes[j].x;
        const dy = newNodes[i].y - newNodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < maxDistance) {
          newConnections.push({ source: i, target: j, opacity: 1 - distance / maxDistance });
        }
      }
    }

    setNodes(newNodes);
    setConnections(newConnections);
    animateNodes();
  };

  const animateNodes = () => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        let x = node.x + node.vx;
        let y = node.y + node.vy;

        if (x < 0 || x > containerRef.current.offsetWidth) node.vx *= -1;
        if (y < 0 || y > containerRef.current.offsetHeight) node.vy *= -1;

        const pulse = (node.pulse + 0.02) % (2 * Math.PI);

        return { ...node, x, y, pulse };
      })
    );

    animationRef.current = requestAnimationFrame(animateNodes);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden -z-10"
      style={{
        background: "radial-gradient(circle at center, #001d3d, #000814)",
      }}
    >
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {connections.map((conn, index) => {
          const sourceNode = nodes[conn.source];
          const targetNode = nodes[conn.target];
          if (!sourceNode || !targetNode) return null;
          return (
            <line
              key={index}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="rgba(0, 212, 255, 0.5)"
              strokeWidth="0.7"
              opacity={conn.opacity * 0.8}
            />
          );
        })}

        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.radius * (1 + 0.2 * Math.sin(node.pulse))}
            fill="#00d4ff"
            filter="url(#glow)"
          />
        ))}
      </svg>
    </div>
  );
};

export default NeuralNetworkBackground;