import IconNestDoorbellVisitorFill0Wght100Grad0Opsz48 from '../components/NestDoorbellVisitorFill0Wght100Grad0Opsz48'
import IconNestDoorbellVisitorFill0Wght200Grad0Opsz48 from '../components/NestDoorbellVisitorFill0Wght200Grad0Opsz48'
import IconNestDoorbellVisitorFill0Wght300Grad0Opsz48 from '../components/NestDoorbellVisitorFill0Wght300Grad0Opsz48'
import IconNestDoorbellVisitorFill0Wght400Grad0Opsz48 from '../components/NestDoorbellVisitorFill0Wght400Grad0Opsz48'
import IconNestDoorbellVisitorFill0Wght500Grad0Opsz48 from '../components/NestDoorbellVisitorFill0Wght500Grad0Opsz48'
import IconNestDoorbellVisitorFill0Wght600Grad0Opsz48 from '../components/NestDoorbellVisitorFill0Wght600Grad0Opsz48'
import IconNestDoorbellVisitorFill0Wght700Grad0Opsz48 from '../components/NestDoorbellVisitorFill0Wght700Grad0Opsz48'
import IconNestDoorbellVisitorFill1Wght100Grad0Opsz48 from '../components/NestDoorbellVisitorFill1Wght100Grad0Opsz48'
import IconNestDoorbellVisitorFill1Wght200Grad0Opsz48 from '../components/NestDoorbellVisitorFill1Wght200Grad0Opsz48'
import IconNestDoorbellVisitorFill1Wght300Grad0Opsz48 from '../components/NestDoorbellVisitorFill1Wght300Grad0Opsz48'
import IconNestDoorbellVisitorFill1Wght400Grad0Opsz48 from '../components/NestDoorbellVisitorFill1Wght400Grad0Opsz48'
import IconNestDoorbellVisitorFill1Wght500Grad0Opsz48 from '../components/NestDoorbellVisitorFill1Wght500Grad0Opsz48'
import IconNestDoorbellVisitorFill1Wght600Grad0Opsz48 from '../components/NestDoorbellVisitorFill1Wght600Grad0Opsz48'
import IconNestDoorbellVisitorFill1Wght700Grad0Opsz48 from '../components/NestDoorbellVisitorFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconNestDoorbellVisitor = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconNestDoorbellVisitorFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconNestDoorbellVisitorFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconNestDoorbellVisitorFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconNestDoorbellVisitorFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconNestDoorbellVisitorFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconNestDoorbellVisitorFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconNestDoorbellVisitorFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconNestDoorbellVisitorFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconNestDoorbellVisitorFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconNestDoorbellVisitorFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconNestDoorbellVisitorFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconNestDoorbellVisitorFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconNestDoorbellVisitorFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconNestDoorbellVisitorFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
