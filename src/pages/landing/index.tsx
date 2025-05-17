import Landing from './Landing';      // .tsx 확장자 생략 & default import

export default function LandingPage() {
  return (
    <main className="bg-white w-full min-h-screen flex flex-col items-center px-[35px] pt-[46px]">
      <Landing />
    </main>
  );
}