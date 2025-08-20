import React, { useState, useEffect, useRef } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  // Handle scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;

      // Check if section is in viewport
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Trigger animation when section is 60% visible
        const isInView =
          rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      name: "HTML5",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      hoverColor: "group-hover:border-orange-500",
      direction: "left",
    },
    {
      name: "CSS3",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-500",
      direction: "right",
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
      color: "from-yellow-400 to-yellow-500",
      borderColor: "border-yellow-500/30",
      hoverColor: "group-hover:border-yellow-500",
      direction: "left",
    },
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
      color: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-500/30",
      hoverColor: "group-hover:border-cyan-500",
      direction: "right",
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500/30",
      hoverColor: "group-hover:border-green-500",
      direction: "left",
    },
    {
      name: "Express",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.618-2.757a6.518 6.518 0 01-.263-1.794l.002-2.057zM1.116 10.12h10.331c.389-2.096-.814-4.135-2.928-4.897a4.066 4.066 0 00-4.36 1.119 4.553 4.553 0 00-2.043 3.778z" />
        </svg>
      ),
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-500/30",
      hoverColor: "group-hover:border-gray-400",
      direction: "right",
    },
    {
      name: "MongoDB",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
        </svg>
      ),
      color: "from-green-600 to-green-700",
      borderColor: "border-green-600/30",
      hoverColor: "group-hover:border-green-600",
      direction: "left",
    },
    {
      name: "PHP",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.384.297-.25.443-.615.443-1.103 0-.338-.122-.602-.343-.804-.204-.187-.467-.297-.771-.357zm12.787-1.441c-.402 0-.721.108-.935.296-.28.239-.444.613-.444 1.084 0 .326.122.58.343.77.204.174.467.26.771.26h.850l.12-.615c.056-.29.085-.521.085-.675 0-.518-.239-.831-.674-.831l-.116-.289zm.116.289v.11h.944l.515-2.648h-.838c-.556 0-.982.122-1.292.384-.297.25-.443.615-.443 1.103 0 .338.122.602.343.804.204.187.467.297.771.357zM24 11.39c0-2.876-5.373-5.204-12-5.204S0 8.514 0 11.39s5.373 5.204 12 5.204 12-2.328 12-5.204zM8.57 7.799c.736 0 1.330.108 1.768.357.297.17.518.385.662.652.144.267.215.580.215.935 0 .75-.297 1.395-.815 1.943-.518.548-1.330.831-2.214.831H6.548l-.302 1.540H4.8l1.36-6.93H8.57zm3.982 4.409c0-.362-.122-.652-.343-.87-.22-.218-.518-.357-.874-.357-.498 0-.935.218-1.292.566-.357.348-.535.750-.535 1.205 0 .362.122.652.343.87.22.218.518.357.874.357.498 0 .935-.218 1.292-.566.357-.348.535-.75.535-1.205zm7.706-4.409c.736 0 1.330.108 1.768.357.297.17.518.385.662.652.144.267.215.580.215.935 0 .75-.297 1.395-.815 1.943-.518.548-1.330.831-2.214.831h-1.638l-.302 1.540h-1.446l1.36-6.93h2.41z"/>
        </svg>
      ),
      color: "from-indigo-600 to-purple-600",
      borderColor: "border-indigo-500/30",
      hoverColor: "group-hover:border-indigo-500",
      direction: "right",
    },
    {
      name: "WordPress",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.596-.045-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.582-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-.963 0-1.641.84-1.641 1.742 0 .811.469 1.499.963 2.31.375.811.83 1.852.83 3.354 0 1.053-.402 2.299-.761 4.014l-.996 3.331zm-2.395 14.932c-.547.176-1.125.27-1.729.27-1.18 0-2.307-.274-3.320-.77l3.529-10.228 3.614 9.888c.02.05.046.098.073.143M2.608 6.502c-.462 1.04-.7 2.207-.7 3.498 0 2.405 1.025 4.577 2.656 6.107l-1.757-5.07c-.485-1.223-.783-2.053-.199-4.535M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0"/>
        </svg>
      ),
      color: "from-blue-600 to-blue-700",
      borderColor: "border-blue-600/30",
      hoverColor: "group-hover:border-blue-600",
      direction: "left",
    },
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      ),
      color: "from-white to-gray-300",
      borderColor: "border-white/30",
      hoverColor: "group-hover:border-white",
      direction: "right",
    },
    {
      name: "Render",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.073 18.564L6.857 6h3.064l2.927 8.316L15.775 6h3.064l-7.912 12.564z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      hoverColor: "group-hover:border-purple-500",
      direction: "left",
    },
    {
      name: "VS Code",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-400",
      borderColor: "border-blue-500/30",
      hoverColor: "group-hover:border-blue-500",
      direction: "right",
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: "from-gray-600 to-gray-800",
      borderColor: "border-gray-600/30",
      hoverColor: "group-hover:border-gray-500",
      direction: "left",
    },
    {
      name: "Postman",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zM6.187 21.854c-4.947-2.95-6.615-9.319-3.665-14.265 2.95-4.946 9.319-6.615 14.265-3.665 4.946 2.95 6.615 9.319 3.665 14.265-2.95 4.946-9.319 6.615-14.265 3.665zm7.08-16.259l-1.435 1.435c-.146.146-.146.382 0 .528l.528.528c.146.146.382.146.528 0l1.435-1.435c.146-.146.146-.382 0-.528l-.528-.528c-.146-.146-.382-.146-.528 0zm-2.399 2.399l-5.598 5.598c-.146.146-.146.382 0 .528l2.871 2.871c.146.146.382.146.528 0l5.598-5.598c.146-.146.146-.382 0-.528l-2.871-2.871c-.146-.146-.382-.146-.528 0z" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-500/30",
      hoverColor: "group-hover:border-orange-500",
      direction: "right",
    },
  ];

  // Function to get animation classes based on scroll direction and skill direction
  const getAnimationClasses = (direction, index) => {
    const baseClasses = "transition-all duration-1000 ease-out";
    const staggerDelay = `delay-[${index * 150}ms]`;

    if (!isVisible) {
      switch (direction) {
        case "left":
          return `${baseClasses} transform -translate-x-32 opacity-0 ${staggerDelay}`;
        case "right":
          return `${baseClasses} transform translate-x-32 opacity-0 ${staggerDelay}`;
        case "top":
          return `${baseClasses} transform -translate-y-32 opacity-0 ${staggerDelay}`;
        default:
          return `${baseClasses} transform translate-y-32 opacity-0 ${staggerDelay}`;
      }
    }

    return `${baseClasses} transform translate-x-0 translate-y-0 opacity-100 ${staggerDelay}`;
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-black text-white py-16 px-4 md:px-16 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-500 rounded-full opacity-60 animate-ping"></div>
        <div
          className="absolute top-32 right-16 w-3 h-3 bg-pink-500 rounded-full opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50 animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-32 right-32 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header with enhanced animation */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-5xl font-extrabold transition-all duration-1000 ease-out ${
              isVisible
                ? "transform translate-y-0 opacity-100"
                : "transform -translate-y-16 opacity-0"
            }`}
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Skillset
            </span>
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto mt-4 rounded-full transition-all duration-1200 ease-out delay-300 ${
              isVisible
                ? "transform scale-x-100 opacity-100"
                : "transform scale-x-0 opacity-0"
            }`}
          ></div>
        </div>

        {/* Skills Grid with scroll-based directional animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const animationDelay = `${index * 200}ms`;

            return (
              <div
                key={skill.name + index}
                className={`
                  group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 
                  border cursor-pointer
                  hover:bg-gray-800/70 hover:scale-110 hover:-translate-y-3
                  ${skill.borderColor} ${skill.hoverColor}
                  ${getAnimationClasses(skill.direction, index)}
                `}
                style={{
                  transitionDelay: isVisible ? animationDelay : "0ms",
                }}
              >
                {/* Enhanced gradient background on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                    transition-all duration-500 bg-gradient-to-br ${skill.color}
                    group-hover:animate-pulse
                  `}
                />

                {/* Icon with enhanced animations */}
                <div
                  className={`
                    text-white group-hover:bg-gradient-to-br group-hover:${
                      skill.color
                    } 
                    group-hover:bg-clip-text group-hover:text-transparent
                    transition-all duration-500 flex justify-center mb-4
                    group-hover:rotate-12 group-hover:scale-125
                    ${isVisible ? "animate-pulse" : ""}
                  `}
                  style={{
                    animationDelay: animationDelay,
                    animationDuration: "2s",
                  }}
                >
                  {skill.icon}
                </div>

                {/* Skill Name with enhanced hover effect */}
                <h3 className="text-sm md:text-base font-semibold text-center text-gray-300 group-hover:text-white transition-all duration-300 group-hover:tracking-wider">
                  {skill.name}
                </h3>

                {/* Enhanced hover glow effect */}
                <div
                  className={`
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 
                    transition-all duration-500 bg-gradient-to-br ${skill.color} blur-xl
                    group-hover:scale-110
                  `}
                />

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out" />
                </div>

                {/* Direction indicator (subtle) */}
                <div
                  className={`absolute top-2 ${
                    skill.direction === "left" ? "left-2" : "right-2"
                  } w-1 h-1 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${
                    skill.color.includes("orange")
                      ? "bg-orange-500"
                      : skill.color.includes("blue")
                      ? "bg-blue-500"
                      : skill.color.includes("yellow")
                      ? "bg-yellow-500"
                      : skill.color.includes("cyan")
                      ? "bg-cyan-500"
                      : skill.color.includes("green")
                      ? "bg-green-500"
                      : skill.color.includes("purple")
                      ? "bg-purple-500"
                      : skill.color.includes("indigo")
                      ? "bg-indigo-500"
                      : skill.color.includes("white")
                      ? "bg-white"
                      : "bg-gray-500"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div
          className={`text-center mt-12 transition-all duration-1000 ease-out delay-1500 ${
            isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-8 opacity-0"
          }`}
        >
          {/* Optional scroll indicators can be added here */}
        </div>
      </div>

      {/* Enhanced ambient lighting effect */}
      <div
        className={`absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl transition-all duration-2000 ${
          isVisible ? "animate-pulse scale-110" : "scale-75 opacity-50"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl transition-all duration-2000 ${
          isVisible ? "animate-pulse scale-110" : "scale-75 opacity-50"
        }`}
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}

export default Skills;