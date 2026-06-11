import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface UIState {
  isMobileMenuOpen: boolean
  isSearchOpen: boolean
  activeModal: string | null

  openMobileMenu: () => void
  closeMobileMenu: () => void
  toggleMobileMenu: () => void
  openSearch: () => void
  closeSearch: () => void
  openModal: (id: string) => void
  closeModal: () => void
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      isMobileMenuOpen: false,
      isSearchOpen: false,
      activeModal: null,

      openMobileMenu: () => set({ isMobileMenuOpen: true }),
      closeMobileMenu: () => set({ isMobileMenuOpen: false }),
      toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
      openSearch: () => set({ isSearchOpen: true }),
      closeSearch: () => set({ isSearchOpen: false }),
      openModal: (id: string) => set({ activeModal: id }),
      closeModal: () => set({ activeModal: null }),
    }),
    { name: 'ui-store' },
  ),
)
