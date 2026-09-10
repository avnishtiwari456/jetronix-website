import React from "react";

/**
 * A small drawing of what the code looks like once it is printed, one per
 * industry: the carton, the can, the blister foil and so on, each carrying the
 * kind of mark that sector actually needs.
 */

type SampleKind = "carton" | "can" | "blister" | "pack" | "cable" | "tube";

/** A block of printed lines, in the dot pattern a coder lays down. */
function Code({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <span className={`block font-mono leading-[1.35] dot-matrix ${className}`}>
      {lines.map((l) => (
        <span key={l} className="block whitespace-nowrap">{l}</span>
      ))}
    </span>
  );
}

/** A stand-in for a 2D code — a coarse checker, not a scannable symbol. */
function DataMatrix({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%), linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%)",
        backgroundSize: "5px 5px",
        backgroundPosition: "0 0, 2.5px 2.5px",
        opacity: 0.85,
      }}
    />
  );
}

export default function IndustrySample({ kind }: { kind: SampleKind }) {
  if (kind === "carton") {
    // Corrugated box with the retail block a food carton carries
    return (
      <div className="w-full h-full bg-[#d9c3a0] flex items-center justify-center p-4">
        <div className="w-full max-w-[190px] bg-[#c8ad84] border border-[#b0906a] rounded-sm shadow-inner px-3 py-3 flex items-start gap-2.5 text-[#3b2b1a]">
          <Code
            className="text-[7px]"
            lines={["M.R.P. ₹250.00", "MFG: 24/05/2026", "EXP: 23/05/2028", "LOT: A1B2C3"]}
          />
          <DataMatrix className="w-8 h-8 text-[#3b2b1a]" />
        </div>
      </div>
    );
  }

  if (kind === "can") {
    // Underside of an aluminium can, where the beverage code goes
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-300 via-slate-100 to-slate-400 flex items-center justify-center p-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 border-2 border-slate-400/70 shadow-inner flex items-center justify-center">
          <Code className="text-[6.5px] text-slate-800 text-center" lines={["EXP 11/04/26", "BATCH AB123", "07:40 L2"]} />
        </div>
      </div>
    );
  }

  if (kind === "blister") {
    // Pharma blister foil: small print plus the 2D code the rules ask for
    return (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-[190px] bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-300 rounded-md px-3 py-2.5 flex items-center gap-2.5">
          <div className="grid grid-cols-4 gap-1 shrink-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="w-3 h-3 rounded-full bg-slate-300/80 border border-slate-400/50" />
            ))}
          </div>
          <div className="min-w-0">
            <Code className="text-[6.5px] text-slate-700" lines={["M.R.P. 250.00", "MFG 12/04/26", "EXP 11/04/28"]} />
          </div>
          <DataMatrix className="w-7 h-7 text-slate-800" />
        </div>
      </div>
    );
  }

  if (kind === "pack") {
    // Carton pack face carrying a tax stamp code
    return (
      <div className="w-full h-full bg-slate-200 flex items-center justify-center p-4">
        <div className="w-20 h-28 rounded-md bg-gradient-to-b from-white to-slate-100 border border-slate-300 shadow-md flex flex-col justify-between p-2">
          <span className="block h-1.5 w-full rounded-sm bg-amber-500/70" />
          <Code className="text-[6px] text-slate-800" lines={["TAX 4471", "24/05/26", "SHIFT B"]} />
          <DataMatrix className="w-6 h-6 self-end text-slate-800" />
        </div>
      </div>
    );
  }

  if (kind === "cable") {
    // Repeating inline print along an extruded cable
    return (
      <div className="w-full h-full bg-slate-800 flex items-center justify-center p-4">
        <div className="w-full h-10 rounded-full bg-gradient-to-b from-slate-900 via-black to-slate-900 border-y border-slate-700 flex items-center overflow-hidden px-3">
          <Code
            className="text-[7px] text-amber-300"
            lines={["JETRONIX JX350   24/05/2026   0562 METERS   JETRONIX"]}
          />
        </div>
      </div>
    );
  }

  // tube — cosmetic tube crimp, where the batch code is laid
  return (
    <div className="w-full h-full bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[180px] h-20 rounded-l-full rounded-r-md bg-gradient-to-b from-white via-slate-50 to-slate-200 border border-slate-300 shadow-sm flex items-center justify-end pr-3">
        <div className="h-full w-8 bg-slate-300/70 border-l border-slate-400/60 mr-3" />
        <Code className="text-[6.5px] text-slate-700" lines={["B.NO AB1234", "MFG 05/2026", "EXP 04/2029"]} />
      </div>
    </div>
  );
}
