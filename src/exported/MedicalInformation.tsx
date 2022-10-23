import IconMedicalInformationFill0Wght100Grad0Opsz48 from '../components/MedicalInformationFill0Wght100Grad0Opsz48'
import IconMedicalInformationFill0Wght200Grad0Opsz48 from '../components/MedicalInformationFill0Wght200Grad0Opsz48'
import IconMedicalInformationFill0Wght300Grad0Opsz48 from '../components/MedicalInformationFill0Wght300Grad0Opsz48'
import IconMedicalInformationFill0Wght400Grad0Opsz48 from '../components/MedicalInformationFill0Wght400Grad0Opsz48'
import IconMedicalInformationFill0Wght500Grad0Opsz48 from '../components/MedicalInformationFill0Wght500Grad0Opsz48'
import IconMedicalInformationFill0Wght600Grad0Opsz48 from '../components/MedicalInformationFill0Wght600Grad0Opsz48'
import IconMedicalInformationFill0Wght700Grad0Opsz48 from '../components/MedicalInformationFill0Wght700Grad0Opsz48'
import IconMedicalInformationFill1Wght100Grad0Opsz48 from '../components/MedicalInformationFill1Wght100Grad0Opsz48'
import IconMedicalInformationFill1Wght200Grad0Opsz48 from '../components/MedicalInformationFill1Wght200Grad0Opsz48'
import IconMedicalInformationFill1Wght300Grad0Opsz48 from '../components/MedicalInformationFill1Wght300Grad0Opsz48'
import IconMedicalInformationFill1Wght400Grad0Opsz48 from '../components/MedicalInformationFill1Wght400Grad0Opsz48'
import IconMedicalInformationFill1Wght500Grad0Opsz48 from '../components/MedicalInformationFill1Wght500Grad0Opsz48'
import IconMedicalInformationFill1Wght600Grad0Opsz48 from '../components/MedicalInformationFill1Wght600Grad0Opsz48'
import IconMedicalInformationFill1Wght700Grad0Opsz48 from '../components/MedicalInformationFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMedicalInformation = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMedicalInformationFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMedicalInformationFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMedicalInformationFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMedicalInformationFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMedicalInformationFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMedicalInformationFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMedicalInformationFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMedicalInformationFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMedicalInformationFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMedicalInformationFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMedicalInformationFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMedicalInformationFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMedicalInformationFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMedicalInformationFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
