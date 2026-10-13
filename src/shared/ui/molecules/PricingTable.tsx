import type { BillingContent } from "@/content/types";

interface PricingTableProps {
  content: BillingContent;
}

export function PricingTable({ content }: PricingTableProps) {
  return (
    <div className="sign overflow-x-auto" data-reveal>
      <table className="w-full min-w-[34rem] border-collapse text-left">
        <caption className="sr-only">{content.title}</caption>
        <thead>
          <tr className="border-b border-bone/15">
            <th scope="col" className="type-eyebrow px-5 py-4 text-[0.62rem] text-bone-45">
              {content.columns.item}
            </th>
            <th scope="col" className="type-eyebrow px-5 py-4 text-[0.62rem] text-bone-45">
              {content.columns.monthly}
            </th>
            <th scope="col" className="type-eyebrow px-5 py-4 text-[0.62rem] text-gold">
              {content.columns.annual}
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row) => (
            <tr key={row.item} className="border-b border-bone/8 last:border-0">
              <th scope="row" className="type-label px-5 py-4 text-bone">
                {row.item}
              </th>
              <td className="px-5 py-4 text-bone-70" data-numeric>
                {row.monthly}
              </td>
              <td className="px-5 py-4 font-semibold text-gold" data-numeric>
                {row.annual}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
