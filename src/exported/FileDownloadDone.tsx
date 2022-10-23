import IconFileDownloadDoneFill0Wght100Grad0Opsz48 from '../components/FileDownloadDoneFill0Wght100Grad0Opsz48'
import IconFileDownloadDoneFill0Wght200Grad0Opsz48 from '../components/FileDownloadDoneFill0Wght200Grad0Opsz48'
import IconFileDownloadDoneFill0Wght300Grad0Opsz48 from '../components/FileDownloadDoneFill0Wght300Grad0Opsz48'
import IconFileDownloadDoneFill0Wght400Grad0Opsz48 from '../components/FileDownloadDoneFill0Wght400Grad0Opsz48'
import IconFileDownloadDoneFill0Wght500Grad0Opsz48 from '../components/FileDownloadDoneFill0Wght500Grad0Opsz48'
import IconFileDownloadDoneFill0Wght600Grad0Opsz48 from '../components/FileDownloadDoneFill0Wght600Grad0Opsz48'
import IconFileDownloadDoneFill0Wght700Grad0Opsz48 from '../components/FileDownloadDoneFill0Wght700Grad0Opsz48'
import IconFileDownloadDoneFill1Wght100Grad0Opsz48 from '../components/FileDownloadDoneFill1Wght100Grad0Opsz48'
import IconFileDownloadDoneFill1Wght200Grad0Opsz48 from '../components/FileDownloadDoneFill1Wght200Grad0Opsz48'
import IconFileDownloadDoneFill1Wght300Grad0Opsz48 from '../components/FileDownloadDoneFill1Wght300Grad0Opsz48'
import IconFileDownloadDoneFill1Wght400Grad0Opsz48 from '../components/FileDownloadDoneFill1Wght400Grad0Opsz48'
import IconFileDownloadDoneFill1Wght500Grad0Opsz48 from '../components/FileDownloadDoneFill1Wght500Grad0Opsz48'
import IconFileDownloadDoneFill1Wght600Grad0Opsz48 from '../components/FileDownloadDoneFill1Wght600Grad0Opsz48'
import IconFileDownloadDoneFill1Wght700Grad0Opsz48 from '../components/FileDownloadDoneFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFileDownloadDone = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFileDownloadDoneFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFileDownloadDoneFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFileDownloadDoneFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFileDownloadDoneFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFileDownloadDoneFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFileDownloadDoneFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFileDownloadDoneFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFileDownloadDoneFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFileDownloadDoneFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFileDownloadDoneFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFileDownloadDoneFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFileDownloadDoneFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFileDownloadDoneFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFileDownloadDoneFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
