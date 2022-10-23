import IconPictureAsPdfFill0Wght100Grad0Opsz48 from '../components/PictureAsPdfFill0Wght100Grad0Opsz48'
import IconPictureAsPdfFill0Wght200Grad0Opsz48 from '../components/PictureAsPdfFill0Wght200Grad0Opsz48'
import IconPictureAsPdfFill0Wght300Grad0Opsz48 from '../components/PictureAsPdfFill0Wght300Grad0Opsz48'
import IconPictureAsPdfFill0Wght400Grad0Opsz48 from '../components/PictureAsPdfFill0Wght400Grad0Opsz48'
import IconPictureAsPdfFill0Wght500Grad0Opsz48 from '../components/PictureAsPdfFill0Wght500Grad0Opsz48'
import IconPictureAsPdfFill0Wght600Grad0Opsz48 from '../components/PictureAsPdfFill0Wght600Grad0Opsz48'
import IconPictureAsPdfFill0Wght700Grad0Opsz48 from '../components/PictureAsPdfFill0Wght700Grad0Opsz48'
import IconPictureAsPdfFill1Wght100Grad0Opsz48 from '../components/PictureAsPdfFill1Wght100Grad0Opsz48'
import IconPictureAsPdfFill1Wght200Grad0Opsz48 from '../components/PictureAsPdfFill1Wght200Grad0Opsz48'
import IconPictureAsPdfFill1Wght300Grad0Opsz48 from '../components/PictureAsPdfFill1Wght300Grad0Opsz48'
import IconPictureAsPdfFill1Wght400Grad0Opsz48 from '../components/PictureAsPdfFill1Wght400Grad0Opsz48'
import IconPictureAsPdfFill1Wght500Grad0Opsz48 from '../components/PictureAsPdfFill1Wght500Grad0Opsz48'
import IconPictureAsPdfFill1Wght600Grad0Opsz48 from '../components/PictureAsPdfFill1Wght600Grad0Opsz48'
import IconPictureAsPdfFill1Wght700Grad0Opsz48 from '../components/PictureAsPdfFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconPictureAsPdf = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconPictureAsPdfFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconPictureAsPdfFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconPictureAsPdfFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconPictureAsPdfFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconPictureAsPdfFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconPictureAsPdfFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconPictureAsPdfFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconPictureAsPdfFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconPictureAsPdfFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconPictureAsPdfFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconPictureAsPdfFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconPictureAsPdfFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconPictureAsPdfFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconPictureAsPdfFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
