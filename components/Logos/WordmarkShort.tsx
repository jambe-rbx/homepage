import type { FC } from "react"

const WordmarkShort: FC<{ [key: string]: unknown }> = (props) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M478.856 348.231C499.216 321.975 484.963 271.407 448.313 275.745C457.814 255.169 467.291 234.569 476.742 213.947C552.965 79.6122 383.9 22.4023 300.818 100.288C262.139 31.7486 -46.6233 52.565 27.4198 184.345C36.4486 205.031 45.7404 225.597 54.8536 246.253C50.9641 282.757 30.7081 358.008 51.9506 385.176C62.5984 401.544 73.2462 417.889 83.894 434.211C92.8758 453.435 135.238 456.18 149.331 436.465C179.649 435.954 221.392 438.168 259.433 404.289C303.806 452.513 430.424 453.775 454.852 385.596C462.869 373.155 470.87 360.7 478.856 348.231Z"
        fill="#2FCD9A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M442.348 296.332C424.266 303.203 405.757 310.454 386.481 310.454C349.891 310.739 306.685 303.108 327.637 264.227C352.601 229.97 412.658 263.294 412.551 214.498C413.532 183.134 371.324 198.587 359.502 185.189C346.307 174.399 349.695 153.845 363.068 144.824C371.164 136.869 407.291 130.037 417.062 140.313C431.488 153.426 408.307 182.487 427.387 195.714C481.381 225.326 495.147 129.104 457.362 102.46C416.349 67.4614 331.257 82.0775 300.783 129.37C270.772 67.5566 178.404 74.9978 118.615 87.9201C86.0545 98.1019 16.7253 114.107 39.0861 160.563C48.6617 172.115 62.9626 167.757 74.6601 160.563C87.8733 152.398 104.154 145.547 123.626 140.142C153.333 130.969 208.361 126.687 232.042 141.132C259.823 158.469 238.657 189.262 213.461 195.143C198.09 203.726 169.899 194.591 157.47 210.901C151.835 220.416 149.624 235.185 156.971 244.872C167.509 255.51 194.649 248.678 203.921 259.145C218.579 271.839 213.301 289.443 196.379 300.215C185.038 308.836 150.534 313.061 124.874 310.758C127.245 287.54 130.562 265.464 135.056 241.732C138.087 210.653 158.112 169.508 150.302 155.615C137.106 138.201 98.5901 142.407 92.9732 165.72C80.2035 213.281 71.0676 261.869 65.6552 311.006L62.3563 348.631C55.8121 384.486 108.897 388.292 120.452 361.953C173.554 363.856 236 358.47 264.567 309.845C283.753 386.427 501.887 382.164 467.847 301.204C461.962 291.974 450.924 292.336 442.348 296.332ZM269.007 252.713C264.904 243.804 258.611 236.253 250.801 230.865C264.923 225.155 276.442 217.828 285.75 208.141C289.735 203.943 293.254 199.268 296.235 194.21C300.16 202.204 305.837 209.066 312.783 214.212C293.418 222.567 278.493 234.366 268.953 252.713H269.007Z"
        fill="#FAFAFA"
      />
    </svg>
  )
}

export default WordmarkShort
