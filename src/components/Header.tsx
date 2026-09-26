import React from 'react';
import { SCHOOL_ROLES } from '../data/schoolAndBibleData';

export const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white border-b border-amber-600/30">
      {/* School Roles Ribbon */}
      <div className="max-w-7xl mx-auto px-4 py-2 border-b border-red-900/50">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-amber-300 uppercase tracking-wider text-[11px] flex items-center gap-1">
              <span>🏫</span> School Community Roles:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {SCHOOL_ROLES.map((role) => (
                <span
                  key={role.name}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-900/60 border border-amber-500/20 text-red-100 text-[11px]"
                  title={`${role.roleTitle} — ${role.name}: ${role.description}`}
                >
                  <span>{role.emoji}</span>
                  <span className="font-semibold text-amber-200">{role.roleTitle}:</span>
                  <span>{role.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-amber-300/90 bg-amber-950/70 px-2.5 py-0.5 rounded-full border border-amber-500/30">
            <span>📖</span>
            <span className="font-medium">
              Bible section is a dedicated feature of Christmas Answers (not a school staff role)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
