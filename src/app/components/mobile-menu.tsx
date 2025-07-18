"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

interface MobileMenuProps {
    menuItems: string[];
    currentSection: string;
}

export default function MobileMenu({ menuItems, currentSection }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isMouseEnter, setIsMouseEnter] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleMenuClick = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setIsOpen(false)
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button
                onClick={toggleMenu}
                className="lg:hidden fixed top-4 right-4 z-50 p-1 rounded-md  backdrop-blur-sm border border-slate-700 hover:bg-slate-700/80 transition-colors duration-200"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-slate-200" />
                ) : (
                    <Menu className="w-6 h-6 text-slate-200" />
                )}
            </button>

            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] border-l backdrop-blur-sm border-slate-700 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{
                    background: `
            radial-gradient(
              1000px circle at calc(var(--mouse-x, 50%) + 80px) calc(var(--mouse-y, 50%) + 100px),
              rgba(19, 78, 74, 0.2),
              transparent 100%
            ),
            radial-gradient(
              800px circle at 25% 30%,
              rgba(15, 23, 42),
              transparent 100%
            ),
            radial-gradient(
              900px circle at 70% 80%,
              rgba(15, 23, 42),
              transparent 100%
            )
          `,
                }}
            >
                <div className="flex flex-col h-full pt-6 px-6">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-slate-200 ">LIST MENU</h2>
                        <div className="h-px max-w-[200px] bg-gradient-to-r from-teal-400 to-transparent"></div>
                    </div>

                    <nav className="flex-1">
                        <ul className="space-y-4">
                            {menuItems.map((item, index) => (
                                <li key={`mobile-menu-${index}-${item}`}>
                                    <button
                                        onClick={() => handleMenuClick(item)}
                                        onMouseEnter={() => setIsMouseEnter({ [item]: true })}
                                        onMouseLeave={() => setIsMouseEnter({ [item]: false })}
                                        className={`w-fit group flex items-center space-x-4 transition-colors duration-200 ${currentSection === item
                                            ? "text-teal-300"
                                            : isMouseEnter[item]
                                                ? "text-slate-200"
                                                : "text-slate-400"
                                            }`}
                                    >
                                        <div
                                            className={`h-px transition-all duration-200 ${currentSection === item
                                                ? "bg-slate-200 w-16"
                                                : isMouseEnter[item]
                                                    ? "bg-slate-200 w-16"
                                                    : "bg-slate-400 w-8"
                                                }`}
                                        ></div>
                                        <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="py-6 border-t border-slate-700">
                        <p className="text-xs text-slate-500 text-center">
                            Tap outside to close
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}