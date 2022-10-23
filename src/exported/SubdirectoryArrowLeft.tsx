import IconSubdirectoryArrowLeftFill0Wght100Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill0Wght100Grad0Opsz48'
import IconSubdirectoryArrowLeftFill0Wght200Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill0Wght200Grad0Opsz48'
import IconSubdirectoryArrowLeftFill0Wght300Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill0Wght300Grad0Opsz48'
import IconSubdirectoryArrowLeftFill0Wght400Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill0Wght400Grad0Opsz48'
import IconSubdirectoryArrowLeftFill0Wght500Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill0Wght500Grad0Opsz48'
import IconSubdirectoryArrowLeftFill0Wght600Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill0Wght600Grad0Opsz48'
import IconSubdirectoryArrowLeftFill0Wght700Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill0Wght700Grad0Opsz48'
import IconSubdirectoryArrowLeftFill1Wght100Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill1Wght100Grad0Opsz48'
import IconSubdirectoryArrowLeftFill1Wght200Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill1Wght200Grad0Opsz48'
import IconSubdirectoryArrowLeftFill1Wght300Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill1Wght300Grad0Opsz48'
import IconSubdirectoryArrowLeftFill1Wght400Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill1Wght400Grad0Opsz48'
import IconSubdirectoryArrowLeftFill1Wght500Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill1Wght500Grad0Opsz48'
import IconSubdirectoryArrowLeftFill1Wght600Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill1Wght600Grad0Opsz48'
import IconSubdirectoryArrowLeftFill1Wght700Grad0Opsz48 from '../components/SubdirectoryArrowLeftFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSubdirectoryArrowLeft = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSubdirectoryArrowLeftFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSubdirectoryArrowLeftFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSubdirectoryArrowLeftFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSubdirectoryArrowLeftFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSubdirectoryArrowLeftFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSubdirectoryArrowLeftFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSubdirectoryArrowLeftFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSubdirectoryArrowLeftFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSubdirectoryArrowLeftFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSubdirectoryArrowLeftFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSubdirectoryArrowLeftFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSubdirectoryArrowLeftFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSubdirectoryArrowLeftFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSubdirectoryArrowLeftFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
