"use client"

export default function Footer() {
  const year = new Date()
  return (
    <footer className="bg-gray-50 border-gray-100 border-t">
      <div className="container">
        <div className="flex flex-col items-center py-5 lg:flex-row justify-center">
          ©aufarijaal - {year.getFullYear()}
        </div>
      </div>
    </footer>
  );
}
