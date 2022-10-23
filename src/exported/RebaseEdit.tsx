import IconRebaseEditFill0Wght100Grad0Opsz48 from '../components/RebaseEditFill0Wght100Grad0Opsz48'
import IconRebaseEditFill0Wght200Grad0Opsz48 from '../components/RebaseEditFill0Wght200Grad0Opsz48'
import IconRebaseEditFill0Wght300Grad0Opsz48 from '../components/RebaseEditFill0Wght300Grad0Opsz48'
import IconRebaseEditFill0Wght400Grad0Opsz48 from '../components/RebaseEditFill0Wght400Grad0Opsz48'
import IconRebaseEditFill0Wght500Grad0Opsz48 from '../components/RebaseEditFill0Wght500Grad0Opsz48'
import IconRebaseEditFill0Wght600Grad0Opsz48 from '../components/RebaseEditFill0Wght600Grad0Opsz48'
import IconRebaseEditFill0Wght700Grad0Opsz48 from '../components/RebaseEditFill0Wght700Grad0Opsz48'
import IconRebaseEditFill1Wght100Grad0Opsz48 from '../components/RebaseEditFill1Wght100Grad0Opsz48'
import IconRebaseEditFill1Wght200Grad0Opsz48 from '../components/RebaseEditFill1Wght200Grad0Opsz48'
import IconRebaseEditFill1Wght300Grad0Opsz48 from '../components/RebaseEditFill1Wght300Grad0Opsz48'
import IconRebaseEditFill1Wght400Grad0Opsz48 from '../components/RebaseEditFill1Wght400Grad0Opsz48'
import IconRebaseEditFill1Wght500Grad0Opsz48 from '../components/RebaseEditFill1Wght500Grad0Opsz48'
import IconRebaseEditFill1Wght600Grad0Opsz48 from '../components/RebaseEditFill1Wght600Grad0Opsz48'
import IconRebaseEditFill1Wght700Grad0Opsz48 from '../components/RebaseEditFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconRebaseEdit = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconRebaseEditFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconRebaseEditFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconRebaseEditFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconRebaseEditFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconRebaseEditFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconRebaseEditFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconRebaseEditFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconRebaseEditFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconRebaseEditFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconRebaseEditFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconRebaseEditFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconRebaseEditFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconRebaseEditFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconRebaseEditFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
