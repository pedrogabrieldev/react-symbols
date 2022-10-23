import IconMilitaryTechFill0Wght100Grad0Opsz48 from '../components/MilitaryTechFill0Wght100Grad0Opsz48'
import IconMilitaryTechFill0Wght200Grad0Opsz48 from '../components/MilitaryTechFill0Wght200Grad0Opsz48'
import IconMilitaryTechFill0Wght300Grad0Opsz48 from '../components/MilitaryTechFill0Wght300Grad0Opsz48'
import IconMilitaryTechFill0Wght400Grad0Opsz48 from '../components/MilitaryTechFill0Wght400Grad0Opsz48'
import IconMilitaryTechFill0Wght500Grad0Opsz48 from '../components/MilitaryTechFill0Wght500Grad0Opsz48'
import IconMilitaryTechFill0Wght600Grad0Opsz48 from '../components/MilitaryTechFill0Wght600Grad0Opsz48'
import IconMilitaryTechFill0Wght700Grad0Opsz48 from '../components/MilitaryTechFill0Wght700Grad0Opsz48'
import IconMilitaryTechFill1Wght100Grad0Opsz48 from '../components/MilitaryTechFill1Wght100Grad0Opsz48'
import IconMilitaryTechFill1Wght200Grad0Opsz48 from '../components/MilitaryTechFill1Wght200Grad0Opsz48'
import IconMilitaryTechFill1Wght300Grad0Opsz48 from '../components/MilitaryTechFill1Wght300Grad0Opsz48'
import IconMilitaryTechFill1Wght400Grad0Opsz48 from '../components/MilitaryTechFill1Wght400Grad0Opsz48'
import IconMilitaryTechFill1Wght500Grad0Opsz48 from '../components/MilitaryTechFill1Wght500Grad0Opsz48'
import IconMilitaryTechFill1Wght600Grad0Opsz48 from '../components/MilitaryTechFill1Wght600Grad0Opsz48'
import IconMilitaryTechFill1Wght700Grad0Opsz48 from '../components/MilitaryTechFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconMilitaryTech = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconMilitaryTechFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconMilitaryTechFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconMilitaryTechFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconMilitaryTechFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconMilitaryTechFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconMilitaryTechFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconMilitaryTechFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconMilitaryTechFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconMilitaryTechFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconMilitaryTechFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconMilitaryTechFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconMilitaryTechFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconMilitaryTechFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconMilitaryTechFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
