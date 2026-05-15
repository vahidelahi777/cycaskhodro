import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Vehicle, VehicleColor } from '@/types'

interface ConfiguratorState {
  selectedVehicle: Vehicle | null
  selectedColor: VehicleColor | null
  selectedTrim: string | null
  isOpen: boolean

  setVehicle: (vehicle: Vehicle) => void
  setColor: (color: VehicleColor) => void
  setTrim: (trim: string) => void
  openConfigurator: (vehicle: Vehicle) => void
  closeConfigurator: () => void
  reset: () => void
}

export const useConfiguratorStore = create<ConfiguratorState>()(
  devtools(
    (set) => ({
      selectedVehicle: null,
      selectedColor: null,
      selectedTrim: null,
      isOpen: false,

      setVehicle: (vehicle) =>
        set({ selectedVehicle: vehicle, selectedColor: vehicle.colors[0] || null }),

      setColor: (color) => set({ selectedColor: color }),

      setTrim: (trim) => set({ selectedTrim: trim }),

      openConfigurator: (vehicle) =>
        set({
          isOpen: true,
          selectedVehicle: vehicle,
          selectedColor: vehicle.colors[0] || null,
        }),

      closeConfigurator: () => set({ isOpen: false }),

      reset: () =>
        set({
          selectedVehicle: null,
          selectedColor: null,
          selectedTrim: null,
          isOpen: false,
        }),
    }),
    { name: 'configurator-store' },
  ),
)
