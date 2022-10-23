import IconLocalHospitalFill0Wght100Grad0Opsz48 from '../components/LocalHospitalFill0Wght100Grad0Opsz48'
import IconLocalHospitalFill0Wght200Grad0Opsz48 from '../components/LocalHospitalFill0Wght200Grad0Opsz48'
import IconLocalHospitalFill0Wght300Grad0Opsz48 from '../components/LocalHospitalFill0Wght300Grad0Opsz48'
import IconLocalHospitalFill0Wght400Grad0Opsz48 from '../components/LocalHospitalFill0Wght400Grad0Opsz48'
import IconLocalHospitalFill0Wght500Grad0Opsz48 from '../components/LocalHospitalFill0Wght500Grad0Opsz48'
import IconLocalHospitalFill0Wght600Grad0Opsz48 from '../components/LocalHospitalFill0Wght600Grad0Opsz48'
import IconLocalHospitalFill0Wght700Grad0Opsz48 from '../components/LocalHospitalFill0Wght700Grad0Opsz48'
import IconLocalHospitalFill1Wght100Grad0Opsz48 from '../components/LocalHospitalFill1Wght100Grad0Opsz48'
import IconLocalHospitalFill1Wght200Grad0Opsz48 from '../components/LocalHospitalFill1Wght200Grad0Opsz48'
import IconLocalHospitalFill1Wght300Grad0Opsz48 from '../components/LocalHospitalFill1Wght300Grad0Opsz48'
import IconLocalHospitalFill1Wght400Grad0Opsz48 from '../components/LocalHospitalFill1Wght400Grad0Opsz48'
import IconLocalHospitalFill1Wght500Grad0Opsz48 from '../components/LocalHospitalFill1Wght500Grad0Opsz48'
import IconLocalHospitalFill1Wght600Grad0Opsz48 from '../components/LocalHospitalFill1Wght600Grad0Opsz48'
import IconLocalHospitalFill1Wght700Grad0Opsz48 from '../components/LocalHospitalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalHospital = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalHospitalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalHospitalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalHospitalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalHospitalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalHospitalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalHospitalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalHospitalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalHospitalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalHospitalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalHospitalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalHospitalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalHospitalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalHospitalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalHospitalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
