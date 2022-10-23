import IconBiotechFill0Wght100Grad0Opsz48 from '../components/BiotechFill0Wght100Grad0Opsz48'
import IconBiotechFill0Wght200Grad0Opsz48 from '../components/BiotechFill0Wght200Grad0Opsz48'
import IconBiotechFill0Wght300Grad0Opsz48 from '../components/BiotechFill0Wght300Grad0Opsz48'
import IconBiotechFill0Wght400Grad0Opsz48 from '../components/BiotechFill0Wght400Grad0Opsz48'
import IconBiotechFill0Wght500Grad0Opsz48 from '../components/BiotechFill0Wght500Grad0Opsz48'
import IconBiotechFill0Wght600Grad0Opsz48 from '../components/BiotechFill0Wght600Grad0Opsz48'
import IconBiotechFill0Wght700Grad0Opsz48 from '../components/BiotechFill0Wght700Grad0Opsz48'
import IconBiotechFill1Wght100Grad0Opsz48 from '../components/BiotechFill1Wght100Grad0Opsz48'
import IconBiotechFill1Wght200Grad0Opsz48 from '../components/BiotechFill1Wght200Grad0Opsz48'
import IconBiotechFill1Wght300Grad0Opsz48 from '../components/BiotechFill1Wght300Grad0Opsz48'
import IconBiotechFill1Wght400Grad0Opsz48 from '../components/BiotechFill1Wght400Grad0Opsz48'
import IconBiotechFill1Wght500Grad0Opsz48 from '../components/BiotechFill1Wght500Grad0Opsz48'
import IconBiotechFill1Wght600Grad0Opsz48 from '../components/BiotechFill1Wght600Grad0Opsz48'
import IconBiotechFill1Wght700Grad0Opsz48 from '../components/BiotechFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconBiotech = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconBiotechFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconBiotechFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconBiotechFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconBiotechFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconBiotechFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconBiotechFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconBiotechFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconBiotechFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconBiotechFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconBiotechFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconBiotechFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconBiotechFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconBiotechFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconBiotechFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
