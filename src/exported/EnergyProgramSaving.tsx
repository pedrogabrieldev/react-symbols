import IconEnergyProgramSavingFill0Wght100Grad0Opsz48 from '../components/EnergyProgramSavingFill0Wght100Grad0Opsz48'
import IconEnergyProgramSavingFill0Wght200Grad0Opsz48 from '../components/EnergyProgramSavingFill0Wght200Grad0Opsz48'
import IconEnergyProgramSavingFill0Wght300Grad0Opsz48 from '../components/EnergyProgramSavingFill0Wght300Grad0Opsz48'
import IconEnergyProgramSavingFill0Wght400Grad0Opsz48 from '../components/EnergyProgramSavingFill0Wght400Grad0Opsz48'
import IconEnergyProgramSavingFill0Wght500Grad0Opsz48 from '../components/EnergyProgramSavingFill0Wght500Grad0Opsz48'
import IconEnergyProgramSavingFill0Wght600Grad0Opsz48 from '../components/EnergyProgramSavingFill0Wght600Grad0Opsz48'
import IconEnergyProgramSavingFill0Wght700Grad0Opsz48 from '../components/EnergyProgramSavingFill0Wght700Grad0Opsz48'
import IconEnergyProgramSavingFill1Wght100Grad0Opsz48 from '../components/EnergyProgramSavingFill1Wght100Grad0Opsz48'
import IconEnergyProgramSavingFill1Wght200Grad0Opsz48 from '../components/EnergyProgramSavingFill1Wght200Grad0Opsz48'
import IconEnergyProgramSavingFill1Wght300Grad0Opsz48 from '../components/EnergyProgramSavingFill1Wght300Grad0Opsz48'
import IconEnergyProgramSavingFill1Wght400Grad0Opsz48 from '../components/EnergyProgramSavingFill1Wght400Grad0Opsz48'
import IconEnergyProgramSavingFill1Wght500Grad0Opsz48 from '../components/EnergyProgramSavingFill1Wght500Grad0Opsz48'
import IconEnergyProgramSavingFill1Wght600Grad0Opsz48 from '../components/EnergyProgramSavingFill1Wght600Grad0Opsz48'
import IconEnergyProgramSavingFill1Wght700Grad0Opsz48 from '../components/EnergyProgramSavingFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEnergyProgramSaving = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEnergyProgramSavingFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEnergyProgramSavingFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEnergyProgramSavingFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEnergyProgramSavingFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEnergyProgramSavingFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEnergyProgramSavingFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEnergyProgramSavingFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEnergyProgramSavingFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEnergyProgramSavingFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEnergyProgramSavingFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEnergyProgramSavingFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEnergyProgramSavingFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEnergyProgramSavingFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEnergyProgramSavingFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
