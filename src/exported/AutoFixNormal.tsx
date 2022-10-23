import IconAutoFixNormalFill0Wght100Grad0Opsz48 from '../components/AutoFixNormalFill0Wght100Grad0Opsz48'
import IconAutoFixNormalFill0Wght200Grad0Opsz48 from '../components/AutoFixNormalFill0Wght200Grad0Opsz48'
import IconAutoFixNormalFill0Wght300Grad0Opsz48 from '../components/AutoFixNormalFill0Wght300Grad0Opsz48'
import IconAutoFixNormalFill0Wght400Grad0Opsz48 from '../components/AutoFixNormalFill0Wght400Grad0Opsz48'
import IconAutoFixNormalFill0Wght500Grad0Opsz48 from '../components/AutoFixNormalFill0Wght500Grad0Opsz48'
import IconAutoFixNormalFill0Wght600Grad0Opsz48 from '../components/AutoFixNormalFill0Wght600Grad0Opsz48'
import IconAutoFixNormalFill0Wght700Grad0Opsz48 from '../components/AutoFixNormalFill0Wght700Grad0Opsz48'
import IconAutoFixNormalFill1Wght100Grad0Opsz48 from '../components/AutoFixNormalFill1Wght100Grad0Opsz48'
import IconAutoFixNormalFill1Wght200Grad0Opsz48 from '../components/AutoFixNormalFill1Wght200Grad0Opsz48'
import IconAutoFixNormalFill1Wght300Grad0Opsz48 from '../components/AutoFixNormalFill1Wght300Grad0Opsz48'
import IconAutoFixNormalFill1Wght400Grad0Opsz48 from '../components/AutoFixNormalFill1Wght400Grad0Opsz48'
import IconAutoFixNormalFill1Wght500Grad0Opsz48 from '../components/AutoFixNormalFill1Wght500Grad0Opsz48'
import IconAutoFixNormalFill1Wght600Grad0Opsz48 from '../components/AutoFixNormalFill1Wght600Grad0Opsz48'
import IconAutoFixNormalFill1Wght700Grad0Opsz48 from '../components/AutoFixNormalFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutoFixNormal = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutoFixNormalFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutoFixNormalFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutoFixNormalFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutoFixNormalFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutoFixNormalFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutoFixNormalFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutoFixNormalFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutoFixNormalFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutoFixNormalFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutoFixNormalFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutoFixNormalFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutoFixNormalFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutoFixNormalFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutoFixNormalFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
