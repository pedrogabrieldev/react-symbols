import IconEnergyProgramTimeUsedFill0Wght100Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill0Wght100Grad0Opsz48'
import IconEnergyProgramTimeUsedFill0Wght200Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill0Wght200Grad0Opsz48'
import IconEnergyProgramTimeUsedFill0Wght300Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill0Wght300Grad0Opsz48'
import IconEnergyProgramTimeUsedFill0Wght400Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill0Wght400Grad0Opsz48'
import IconEnergyProgramTimeUsedFill0Wght500Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill0Wght500Grad0Opsz48'
import IconEnergyProgramTimeUsedFill0Wght600Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill0Wght600Grad0Opsz48'
import IconEnergyProgramTimeUsedFill0Wght700Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill0Wght700Grad0Opsz48'
import IconEnergyProgramTimeUsedFill1Wght100Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill1Wght100Grad0Opsz48'
import IconEnergyProgramTimeUsedFill1Wght200Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill1Wght200Grad0Opsz48'
import IconEnergyProgramTimeUsedFill1Wght300Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill1Wght300Grad0Opsz48'
import IconEnergyProgramTimeUsedFill1Wght400Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill1Wght400Grad0Opsz48'
import IconEnergyProgramTimeUsedFill1Wght500Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill1Wght500Grad0Opsz48'
import IconEnergyProgramTimeUsedFill1Wght600Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill1Wght600Grad0Opsz48'
import IconEnergyProgramTimeUsedFill1Wght700Grad0Opsz48 from '../components/EnergyProgramTimeUsedFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconEnergyProgramTimeUsed = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconEnergyProgramTimeUsedFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconEnergyProgramTimeUsedFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconEnergyProgramTimeUsedFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconEnergyProgramTimeUsedFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconEnergyProgramTimeUsedFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconEnergyProgramTimeUsedFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconEnergyProgramTimeUsedFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconEnergyProgramTimeUsedFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconEnergyProgramTimeUsedFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconEnergyProgramTimeUsedFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconEnergyProgramTimeUsedFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconEnergyProgramTimeUsedFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconEnergyProgramTimeUsedFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconEnergyProgramTimeUsedFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
