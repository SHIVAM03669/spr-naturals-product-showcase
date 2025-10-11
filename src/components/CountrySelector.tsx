"use client";

import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Check } from "lucide-react";
import { countries, Country, searchCountries } from "@/lib/countries";

interface CountrySelectorProps {
  value?: string;
  onChange: (country: Country | null) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export default function CountrySelector({
  value,
  onChange,
  placeholder = "Select Country",
  required = false,
  className = ""
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Initialize selected country from value prop
  useEffect(() => {
    if (value) {
      const country = countries.find(c => c.code === value || c.name === value);
      if (country) {
        setSelectedCountry(country);
      }
    }
  }, [value]);

  // Filter countries based on search query
  useEffect(() => {
    if (searchQuery.trim()) {
      setFilteredCountries(searchCountries(searchQuery));
    } else {
      setFilteredCountries(countries);
    }
  }, [searchQuery]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    onChange(country);
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchQuery("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className={`w-full px-4 py-3 border border-sage-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-green bg-white text-left flex items-center justify-between ${
          !selectedCountry ? "text-gray-500" : "text-foreground"
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-required={required}
      >
        <div className="flex items-center gap-2">
          {selectedCountry ? (
            <>
              <span className="text-lg">{selectedCountry.flag}</span>
              <span>{selectedCountry.name}</span>
            </>
          ) : (
            <span>{placeholder}</span>
          )}
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-sage-green/30 rounded-lg shadow-lg max-h-80 overflow-hidden">
          {/* Search Input */}
          <div className="p-3 border-b border-sage-green/20">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search countries..."
                className="w-full pl-10 pr-4 py-2 border border-sage-green/20 rounded-md focus:outline-none focus:ring-2 focus:ring-nature-green text-sm"
              />
            </div>
          </div>

          {/* Countries List */}
          <div className="max-h-60 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={`w-full px-4 py-3 text-left hover:bg-sage-green/10 flex items-center justify-between transition-colors ${
                    selectedCountry?.code === country.code ? "bg-nature-green/10" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{country.flag}</span>
                    <div>
                      <div className="font-medium text-foreground">{country.name}</div>
                      <div className="text-xs text-gray-500">{country.code}</div>
                    </div>
                  </div>
                  {selectedCountry?.code === country.code && (
                    <Check className="w-4 h-4 text-nature-green" />
                  )}
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500">
                <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p>No countries found</p>
                <p className="text-sm">Try a different search term</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
