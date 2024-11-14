// "use client";
// import {
//   useRouter,
//   useParams,
//   useSearchParams,
//   usePathname,
// } from "next/navigation";

const PropertyPage = ({ params, searchParams }) => {
  // const router = useRouter();
  // const params = useParams();
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // console.log(params);
  return <div>Property Page {searchParams.name}</div>;
};

export default PropertyPage;
