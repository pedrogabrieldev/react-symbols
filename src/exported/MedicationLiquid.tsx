import IconMedicationLiquidFill0Wght100Grad0Opsz48 from '../components/MedicationLiquidFill0Wght100Grad0Opsz48'
import IconMedicationLiquidFill0Wght200Grad0Opsz48 from '../components/MedicationLiquidFill0Wght200Grad0Opsz48'
import IconMedicationLiquidFill0Wght300Grad0Opsz48 from '../components/MedicationLiquidFill0Wght300Grad0Opsz48'
import IconMedicationLiquidFill0Wght400Grad0Opsz48 from '../components/MedicationLiquidFill0Wght400Grad0Opsz48'
import IconMedicationLiquidFill0Wght500Grad0Opsz48 from '../components/MedicationLiquidFill0Wght500Grad0Opsz48'
import IconMedicationLiquidFill0Wght600Grad0Opsz48 from '../components/MedicationLiquidFill0Wght600Grad0Opsz48'
import IconMedicationLiquidFill0Wght700Grad0Opsz48 from '../components/MedicationLiquidFill0Wght700Grad0Opsz48'
import IconMedicationLiquidFill1Wght100Grad0Opsz48 from '../components/MedicationLiquidFill1Wght100Grad0Opsz48'
import IconMedicationLiquidFill1Wght200Grad0Opsz48 from '../components/MedicationLiquidFill1Wght200Grad0Opsz48'
import IconMedicationLiquidFill1Wght300Grad0Opsz48 from '../components/MedicationLiquidFill1Wght300Grad0Opsz48'
import IconMedicationLiquidFill1Wght400Grad0Opsz48 from '../components/MedicationLiquidFill1Wght400Grad0Opsz48'
import IconMedicationLiquidFill1Wght500Grad0Opsz48 from '../components/MedicationLiquidFill1Wght500Grad0Opsz48'
import IconMedicationLiquidFill1Wght600Grad0Opsz48 from '../components/MedicationLiquidFill1Wght600Grad0Opsz48'
import IconMedicationLiquidFill1Wght700Grad0Opsz48 from '../components/MedicationLiquidFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMedicationLiquid = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMedicationLiquidFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMedicationLiquidFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMedicationLiquidFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMedicationLiquidFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMedicationLiquidFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMedicationLiquidFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMedicationLiquidFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMedicationLiquidFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMedicationLiquidFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMedicationLiquidFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMedicationLiquidFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMedicationLiquidFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMedicationLiquidFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMedicationLiquidFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
