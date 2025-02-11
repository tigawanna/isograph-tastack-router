import { iso } from "@/__isograph/iso";
import { formatKilobytes } from "@/utils/bytes";



export const UserStatsIso = iso(`
    field User.UserStats @component {
    repositories(first: 1) {
      totalCount
      totalDiskUsage
    }
    }
`)(function UserStatsIso({data}) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        {/* Repository count */}
        <div className="stat">
          <div className="stat-title">Repository count</div>
          <div className="stat-value">{data.repositories.totalCount}</div>
          <div className="stat-desc">{formatKilobytes(data.repositories.totalDiskUsage)}</div>
        </div>
      </div>
    </div>
  );
});
