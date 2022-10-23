import IconLocalPostOfficeFill0Wght100Grad0Opsz48 from '../components/LocalPostOfficeFill0Wght100Grad0Opsz48'
import IconLocalPostOfficeFill0Wght200Grad0Opsz48 from '../components/LocalPostOfficeFill0Wght200Grad0Opsz48'
import IconLocalPostOfficeFill0Wght300Grad0Opsz48 from '../components/LocalPostOfficeFill0Wght300Grad0Opsz48'
import IconLocalPostOfficeFill0Wght400Grad0Opsz48 from '../components/LocalPostOfficeFill0Wght400Grad0Opsz48'
import IconLocalPostOfficeFill0Wght500Grad0Opsz48 from '../components/LocalPostOfficeFill0Wght500Grad0Opsz48'
import IconLocalPostOfficeFill0Wght600Grad0Opsz48 from '../components/LocalPostOfficeFill0Wght600Grad0Opsz48'
import IconLocalPostOfficeFill0Wght700Grad0Opsz48 from '../components/LocalPostOfficeFill0Wght700Grad0Opsz48'
import IconLocalPostOfficeFill1Wght100Grad0Opsz48 from '../components/LocalPostOfficeFill1Wght100Grad0Opsz48'
import IconLocalPostOfficeFill1Wght200Grad0Opsz48 from '../components/LocalPostOfficeFill1Wght200Grad0Opsz48'
import IconLocalPostOfficeFill1Wght300Grad0Opsz48 from '../components/LocalPostOfficeFill1Wght300Grad0Opsz48'
import IconLocalPostOfficeFill1Wght400Grad0Opsz48 from '../components/LocalPostOfficeFill1Wght400Grad0Opsz48'
import IconLocalPostOfficeFill1Wght500Grad0Opsz48 from '../components/LocalPostOfficeFill1Wght500Grad0Opsz48'
import IconLocalPostOfficeFill1Wght600Grad0Opsz48 from '../components/LocalPostOfficeFill1Wght600Grad0Opsz48'
import IconLocalPostOfficeFill1Wght700Grad0Opsz48 from '../components/LocalPostOfficeFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconLocalPostOffice = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconLocalPostOfficeFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconLocalPostOfficeFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconLocalPostOfficeFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconLocalPostOfficeFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconLocalPostOfficeFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconLocalPostOfficeFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconLocalPostOfficeFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconLocalPostOfficeFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconLocalPostOfficeFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconLocalPostOfficeFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconLocalPostOfficeFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconLocalPostOfficeFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconLocalPostOfficeFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconLocalPostOfficeFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
