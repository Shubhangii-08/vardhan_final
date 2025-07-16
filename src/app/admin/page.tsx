"use client";
import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [error, setError] = useState("");

  const correctPassword = "sharksadmin2024"; // Change this to your preferred password

  async function fetchSubmissions() {
    try {
      const res = await fetch("/contact_submissions.json");
      if (!res.ok) throw new Error("Failed to load submissions");
      const data = await res.json();
      setSubmissions(data.reverse());
    } catch (err: any) {
      setError(err.message);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthed(true);
      fetchSubmissions();
    } else {
      setError("Incorrect password");
    }
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-80 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2">Admin Login</h2>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border rounded px-3 py-2"
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 font-semibold hover:bg-blue-700">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Form Submissions</h1>
      {submissions.length === 0 ? (
        <div>No submissions found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border bg-white rounded shadow">
            <thead>
              <tr>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2 whitespace-nowrap">{s.date ? new Date(s.date).toLocaleString() : "-"}</td>
                  <td className="border px-4 py-2">{s.name}</td>
                  <td className="border px-4 py-2">{s.email}</td>
                  <td className="border px-4 py-2">{s.phone}</td>
                  <td className="border px-4 py-2">{s.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 