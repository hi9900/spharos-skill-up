import Image from "next/image";

export default function TopHeader() {
  return (
    <div className="flex justify-between py-[8px] pl-[16px] pr-[10px]">
      <div className="flex items-center">
        <h1 className="text-[0px]">SSG.COM</h1>
        <Image
          alt="SSG.COM"
          src="https://sui.ssgcdn.com/ui/mssgmall-ssg/images/badge/mall/logo/ssg.svg?q=293752feb1b096a611226a9088a793147b3714b1"
          width={86}
          height={0}
        />
        <button className="p-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="currentColor"
              transform="translate(1 1)"
            >
              <path
                stroke-width="1.5"
                d="M4.375 8.313L7 5.688 9.625 8.313"
                transform="translate(6.000000, 6.000000) scale(1, -1) translate(-7.000000, -7.000000)"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <div>검색</div>
      <div className="flex">
        <p>아이콘1</p>
        <p>아이콘2</p>
      </div>
    </div>
  );
}
