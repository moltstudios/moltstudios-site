"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for booking your ATV adventure at Miles 2 Miles Adventure Park!
          You will receive a confirmation email shortly with all the details.
        </p>
        {sessionId && (
          <p className="text-sm text-gray-400 mb-6">
            Confirmation ID: {sessionId.slice(-12).toUpperCase()}
          </p>
        )}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-8">
          <p className="text-orange-800 font-semibold text-sm">
            Please arrive 15 minutes before your scheduled time. Bring a valid ID and wear closed-toe shoes.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full text-lg hover:shadow-xl hover:shadow-orange-500/30 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
