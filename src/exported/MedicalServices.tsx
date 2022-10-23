import IconMedicalServicesFill0Wght100Grad0Opsz48 from '../components/MedicalServicesFill0Wght100Grad0Opsz48'
import IconMedicalServicesFill0Wght200Grad0Opsz48 from '../components/MedicalServicesFill0Wght200Grad0Opsz48'
import IconMedicalServicesFill0Wght300Grad0Opsz48 from '../components/MedicalServicesFill0Wght300Grad0Opsz48'
import IconMedicalServicesFill0Wght400Grad0Opsz48 from '../components/MedicalServicesFill0Wght400Grad0Opsz48'
import IconMedicalServicesFill0Wght500Grad0Opsz48 from '../components/MedicalServicesFill0Wght500Grad0Opsz48'
import IconMedicalServicesFill0Wght600Grad0Opsz48 from '../components/MedicalServicesFill0Wght600Grad0Opsz48'
import IconMedicalServicesFill0Wght700Grad0Opsz48 from '../components/MedicalServicesFill0Wght700Grad0Opsz48'
import IconMedicalServicesFill1Wght100Grad0Opsz48 from '../components/MedicalServicesFill1Wght100Grad0Opsz48'
import IconMedicalServicesFill1Wght200Grad0Opsz48 from '../components/MedicalServicesFill1Wght200Grad0Opsz48'
import IconMedicalServicesFill1Wght300Grad0Opsz48 from '../components/MedicalServicesFill1Wght300Grad0Opsz48'
import IconMedicalServicesFill1Wght400Grad0Opsz48 from '../components/MedicalServicesFill1Wght400Grad0Opsz48'
import IconMedicalServicesFill1Wght500Grad0Opsz48 from '../components/MedicalServicesFill1Wght500Grad0Opsz48'
import IconMedicalServicesFill1Wght600Grad0Opsz48 from '../components/MedicalServicesFill1Wght600Grad0Opsz48'
import IconMedicalServicesFill1Wght700Grad0Opsz48 from '../components/MedicalServicesFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMedicalServices = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMedicalServicesFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMedicalServicesFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMedicalServicesFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMedicalServicesFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMedicalServicesFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMedicalServicesFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMedicalServicesFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMedicalServicesFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMedicalServicesFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMedicalServicesFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMedicalServicesFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMedicalServicesFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMedicalServicesFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMedicalServicesFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
