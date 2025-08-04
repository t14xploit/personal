"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, Check } from "lucide-react";



export default function PasswordGenerator() {
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(false);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [passwordLength, setPasswordLength] = useState<number>(12);
    const [password, setPassword] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);
    const [isGenerating, setIsGenerating] = useState<boolean>(false);

    const generatePassword = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setIsGenerating(true);

        const lowercase: string = "abcdefghijklmnopqrstuvwxyz";
        const uppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialChars: string = "!@#$%^&*()_+-=[]{}|;':,./<>?";
        const numbers: string = "0123456789";
        const chars: string = lowercase +
            (includeUppercase ? uppercase : "") +
            (includeSpecialChars ? specialChars : "") +
            (includeNumbers ? numbers : "");

        let pw: string = "";

        for (let i = 0; i < passwordLength; i++) {
            pw += chars[Math.floor(Math.random() * chars.length)];
        }

        setTimeout(() => {
            setPassword(pw);
            setIsGenerating(false);
            setCopied(false);
        }, 300);
    };

    const copyPassword = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (password.length === 0) return;

        try {
            await navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy password:', err);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200/30 p-6 md:p-8">
            <div className="text-center mb-6">
                <h2 className="text-xl font-light text-gray-800 mb-2">Password Generator</h2>
                <p className="text-gray-500 text-sm">Generate secure passwords</p>
            </div>
            <form onSubmit={generatePassword} className="space-y-5">
                {/* Password Output */}
                <div className="relative">
                    <div className="min-h-[50px] bg-gray-50/80 border border-gray-200 rounded-lg p-3 font-mono text-base break-all flex items-center justify-center">
                        {isGenerating ? (
                            <div className="flex items-center gap-2 text-gray-500">
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                Generating...
                            </div>
                        ) : password ? (
                            <span className="text-gray-800">{password}</span>
                        ) : (
                            <span className="text-gray-400">Click generate</span>
                        )}
                    </div>
                    {password && (
                        <Button
                            type="button"
                            onClick={copyPassword}
                            className="absolute top-2 right-2 h-7 w-7 p-0 bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300"
                            variant="outline"
                        >   {copied ? (
                                <Check className="w-3 h-3 text-green-600" />
                            ) : (
                                <Copy className="w-3 h-3 text-gray-600" />
                            )}
                        </Button>
                    )}
                </div>
                {/* Length Slider */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <label className="text-sm text-gray-600">Length</label>
                        <span className="text-sm font-mono text-green-600 bg-green-50 px-2 py-1 rounded">
                            {passwordLength}
                        </span>
                    </div>
                    <input
                        type="range"
                        id="password-length"
                        min="5"
                        max="25"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                        <span>5</span>
                        <span>25</span>
                    </div>
                </div>
                {/* Options */}
                <div className="space-y-3">
                    <div className="space-y-2">
                        <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-sm text-gray-600">Uppercase (A-Z)</span>
                            <input
                                type="checkbox"
                                checked={includeUppercase}
                                onChange={() => setIncludeUppercase(!includeUppercase)}
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-sm text-gray-600">Numbers (0-9)</span>
                            <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={() => setIncludeNumbers(!includeNumbers)}
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-sm text-gray-600">Special (!@#$)</span>
                            <input
                                type="checkbox"
                                checked={includeSpecialChars}
                                onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                            />
                        </label>
                    </div>
                </div>
                {/* Generate Button */}
                <Button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-light py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isGenerating ? (
                        <div className="flex items-center gap-2">
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            Generating...
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <RefreshCw className="w-4 h-4" />
                            Generate
                        </div>
                    )}
                </Button>
            </form>
            {/* Copy Success Message */}
            {copied && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700 text-sm">
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                </div>
            )}
        </div>
    );
}

