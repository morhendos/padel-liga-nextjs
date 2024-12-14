// ... rest of your imports ...

// Update the header section in your return statement:
return (
    <div className="min-h-screen bg-[#E8E6E3]">
      <header className="pt-8 pb-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full h-[120px]">
            <Image 
              src="/logo.svg"
              alt="Battle Padel"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </header>

      // ... rest of your code ...