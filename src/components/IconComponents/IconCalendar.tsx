import { NavIconProps } from 'types/navIcon';

const IconCalendar = ({
  filled = false,
  outLineStroke = '#051438',
  filledFill = '#fff',
}: NavIconProps) => {
  if (filled) {
    return (
      <svg
        width={26}
        height={26}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.124 3.25h-2.438v-.813a.812.812 0 1 0-1.625 0v.813H8.937v-.813a.812.812 0 1 0-1.625 0v.813H4.874a1.627 1.627 0 0 0-1.625 1.625v16.25a1.627 1.627 0 0 0 1.625 1.625h16.25a1.627 1.627 0 0 0 1.625-1.625V4.875a1.626 1.626 0 0 0-1.625-1.625ZM10.562 19.093a2.422 2.422 0 0 1-1.722-.712.813.813 0 0 1 1.148-1.15.813.813 0 1 0 .574-1.388.8.8 0 0 1-.076-.003l-.024-.003a.79.79 0 0 1-.197-.05l-.025-.01a.85.85 0 0 1-.052-.025l-.015-.008a.843.843 0 0 1-.063-.038l-.02-.015c-.012-.008-.024-.016-.035-.026-.002 0-.003-.002-.005-.003l-.035-.032-.026-.023-.022-.024a.817.817 0 0 1-.198-.378l-.002-.008-.007-.041-.006-.038c0-.01 0-.021-.002-.032l-.002-.05v-.03l.003-.05.005-.034.007-.045.008-.036.01-.041.013-.037.014-.038.016-.037.017-.035.022-.037.019-.032c.008-.013.018-.025.027-.038l.017-.023.569-.71H9.343a.812.812 0 1 1 0-1.626h2.844a.812.812 0 0 1 .635 1.32l-.901 1.126a2.436 2.436 0 0 1-1.359 4.46Zm6.5-.812a.813.813 0 0 1-1.625 0v-3.656l-.325.243a.812.812 0 1 1-.975-1.3l1.625-1.218a.812.812 0 0 1 1.3.65v5.281Zm4.062-10.156H4.874v-3.25h2.438v.812a.813.813 0 0 0 1.625 0v-.812h8.124v.812a.812.812 0 1 0 1.625 0v-.812h2.438v3.25Z"
          fill={filledFill}
        />
      </svg>
    );
  }
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.125 4.063H4.875a.813.813 0 0 0-.813.812v16.25c0 .449.364.813.813.813h16.25a.813.813 0 0 0 .813-.813V4.875a.813.813 0 0 0-.813-.813Z"
        stroke={outLineStroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.875 2.438v3.25m-9.75-3.25v3.25"
        stroke={outLineStroke}
        strokeWidth={1.625}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.063 8.938h17.875"
        stroke={outLineStroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.344 13h2.844l-1.626 2.03a1.624 1.624 0 1 1-1.148 2.776m5.211-3.588L16.25 13v5.28"
        stroke={outLineStroke}
        strokeWidth={1.625}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCalendar;
