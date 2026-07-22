export const formatCurrency = v => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(v || 0);
export const formatNumber = v => new Intl.NumberFormat("en-US").format(v || 0);
export const formatDate = v => v ? new Intl.DateTimeFormat("en-US",{dateStyle:"medium"}).format(new Date(v)) : "—";
