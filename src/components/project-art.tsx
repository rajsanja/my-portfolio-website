export function ProjectArt({ kind }: { kind: "dashboard" | "travel" | "brand" }) {
  if (kind === "dashboard") return <DashboardArt />;
  if (kind === "travel") return <TravelArt />;
  return <BrandArt />;
}

function DashboardArt() {
  return (
    <div className="relative flex h-full min-h-[210px] items-end justify-center overflow-hidden bg-[#f4eee4] px-5 pt-7">
      <div className="w-full max-w-[300px]">
        <div className="rounded-t-xl bg-[#fbfaf7] p-2 shadow-[0_18px_30px_rgba(70,50,30,0.1)] ring-1 ring-[#eadfce]">
          <div className="mb-2 flex gap-1 px-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e7b3a4]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#ead7a4]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#b7d3b4]" />
          </div>
          <div className="grid grid-cols-[58px_1fr] gap-2 rounded-lg bg-white p-2">
            <div className="space-y-1.5">
              <div className="h-7 rounded-md bg-[#e7f0fb]" />
              <div className="h-3.5 rounded-md bg-[#f3f6fa]" />
              <div className="h-3.5 rounded-md bg-[#f3f6fa]" />
              <div className="h-3.5 rounded-md bg-[#f3f6fa]" />
              <div className="h-3.5 rounded-md bg-[#f3f6fa]" />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  ["24", "#e7f0fb"],
                  ["86", "#e7f6ea"],
                  ["12", "#f8ecdf"],
                ].map(([value, tone]) => (
                  <div key={value} className="rounded-lg px-1.5 py-1.5" style={{ background: tone }}>
                    <p className="font-display text-sm leading-none text-[#243044]">{value}</p>
                    <p className="mt-1 text-[8px] text-[#8b97a6]">Today</p>
                  </div>
                ))}
              </div>
              <svg viewBox="0 0 180 64" className="mt-2 h-14 w-full" aria-hidden="true">
                <path d="M0 50h180" stroke="#e6edf5" />
                <path d="M0 52c20-8 30-28 52-24s24 26 46 14 26-30 40-24 22 18 42 6v28H0Z" fill="#6d8cff22" />
                <path d="M4 46c18-6 28-22 48-18s22 20 44 12 24-24 38-18 18 14 42 4" fill="none" stroke="#6d8cff" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mx-auto h-3 w-16 bg-[#e7dccb]" />
        <div className="mx-auto h-1.5 w-24 rounded-b-md bg-[#ddd1c0]" />
      </div>
    </div>
  );
}

function TravelArt() {
  return (
    <div className="relative flex h-full min-h-[210px] items-center justify-center overflow-hidden bg-[#f6f1e8]">
      <div className="relative h-[196px] w-[96px] rounded-[1.45rem] bg-[#1c1916] p-[3px] shadow-[0_16px_28px_rgba(40,30,20,0.16)]">
        <div className="relative h-full overflow-hidden rounded-[1.2rem] bg-[#8ec4de]">
          <div className="absolute inset-x-0 top-0 h-[46%] bg-gradient-to-b from-[#7eb6d6] to-[#d7e7c8]" />
          <div className="absolute top-3 right-3 h-4 w-4 rounded-full bg-[#fff6d8]" />
          <div className="absolute right-2 bottom-[38%] h-14 w-8 rounded-t-sm bg-[#f4efe4]" />
          <div className="absolute bottom-[34%] left-2 h-16 w-9 rounded-t-sm bg-[#efe2cc] shadow-sm" />
          <div className="absolute inset-x-0 bottom-[22%] h-10 bg-[#7f9b86]" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-[#c4784a]" />
          <div className="absolute inset-x-1.5 bottom-1.5 rounded-lg bg-white/95 px-1.5 py-1">
            <p className="text-[8px] font-semibold text-[#1c1916]">Santorini</p>
            <p className="text-[7px] text-[#8a8176]">4 days · from $240</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandArt() {
  return (
    <div className="relative flex h-full min-h-[210px] items-end justify-center overflow-hidden bg-[#f3efe6] px-4">
      <div className="absolute inset-x-8 bottom-5 h-3 rounded-full bg-[#e4d8c6]" aria-hidden="true" />
      <div className="relative mb-6 flex items-end gap-3">
        <div className="flex h-[92px] w-[58px] items-end justify-center rounded-t-lg bg-[#2f4a38] pb-3 text-[#f4f7f2] shadow-[0_10px_16px_rgba(30,40,30,0.16)]">
          <span className="font-display text-xs">lumo</span>
        </div>
        <div className="z-10 flex h-[132px] w-[72px] flex-col items-center rounded-t-xl bg-[#1c2b22] pt-8 text-[#f6f1e8] shadow-[0_16px_24px_rgba(20,30,20,0.2)]">
          <span className="font-display text-xl leading-none">lumo</span>
          <span className="mt-2 text-[8px] tracking-[0.2em] uppercase">daily</span>
        </div>
        <div className="flex h-[78px] w-[54px] items-end justify-center rounded-t-lg bg-[#e7d7be] pb-3 text-[#1c1916] shadow-[0_10px_16px_rgba(80,55,30,0.08)]">
          <span className="font-display text-xs">lumo</span>
        </div>
      </div>
    </div>
  );
}
