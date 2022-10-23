import IconMedicationFill0Wght100Grad0Opsz48 from '../components/MedicationFill0Wght100Grad0Opsz48'
import IconMedicationFill0Wght200Grad0Opsz48 from '../components/MedicationFill0Wght200Grad0Opsz48'
import IconMedicationFill0Wght300Grad0Opsz48 from '../components/MedicationFill0Wght300Grad0Opsz48'
import IconMedicationFill0Wght400Grad0Opsz48 from '../components/MedicationFill0Wght400Grad0Opsz48'
import IconMedicationFill0Wght500Grad0Opsz48 from '../components/MedicationFill0Wght500Grad0Opsz48'
import IconMedicationFill0Wght600Grad0Opsz48 from '../components/MedicationFill0Wght600Grad0Opsz48'
import IconMedicationFill0Wght700Grad0Opsz48 from '../components/MedicationFill0Wght700Grad0Opsz48'
import IconMedicationFill1Wght100Grad0Opsz48 from '../components/MedicationFill1Wght100Grad0Opsz48'
import IconMedicationFill1Wght200Grad0Opsz48 from '../components/MedicationFill1Wght200Grad0Opsz48'
import IconMedicationFill1Wght300Grad0Opsz48 from '../components/MedicationFill1Wght300Grad0Opsz48'
import IconMedicationFill1Wght400Grad0Opsz48 from '../components/MedicationFill1Wght400Grad0Opsz48'
import IconMedicationFill1Wght500Grad0Opsz48 from '../components/MedicationFill1Wght500Grad0Opsz48'
import IconMedicationFill1Wght600Grad0Opsz48 from '../components/MedicationFill1Wght600Grad0Opsz48'
import IconMedicationFill1Wght700Grad0Opsz48 from '../components/MedicationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMedication = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMedicationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMedicationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMedicationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMedicationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMedicationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMedicationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMedicationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMedicationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMedicationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMedicationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMedicationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMedicationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMedicationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMedicationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
